import React, { useRef, useEffect, useState } from 'react';

const WheelOfFortune = ({ onSpinEnd }) => {
    const canvasRef = useRef(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState(""); // Thêm state cho kết quả
    const segments = ['10k', '20k', '50k', '100k', '200k', '500k'];
    const colors = ['#FFC0CB', '#FFD700', '#ADFF2F', '#00FFFF', '#FFA500', '#FF6347'];
    let currentAngle = 0;
    let spinVelocity = 0.1; // Khởi tạo với tốc độ quay ban đầu
    const spinDeceleration = 0.0001; // Giá trị giảm tốc độ quay
    const spinTime = 5000; // Thời gian quay là 5 giây

    useEffect(() => {
        drawWheel();
        drawIndicator();
    }, []);

    const drawSegment = (ctx, index, angleStart, angleEnd, center) => {
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, center - 5, angleStart, angleEnd);
        ctx.closePath();
        ctx.fillStyle = colors[index];
        ctx.fill();

        // Text
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate((angleStart + angleEnd) / 2);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#000';
        ctx.font = 'bold 20px sans-serif';
        ctx.fillText(segments[index], center - 10, 0);
        ctx.restore();
    };

    const drawWheel = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const size = canvas.width;
        const center = size / 2;
        ctx.clearRect(0, 0, size, size);

        const anglePerSeg = (2 * Math.PI) / segments.length;
        for (let i = 0; i < segments.length; i++) {
            drawSegment(ctx, i, anglePerSeg * i + currentAngle, anglePerSeg * (i + 1) + currentAngle, center);
        }
    };

    const drawIndicator = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const size = canvas.width;
        const center = size / 2;

        // Vẽ mũi tên chỉ định
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(center + 10, 10);
        ctx.lineTo(center - 10, 10);
        ctx.lineTo(center, 30);
        ctx.fill();
    };

    const calculateResult = () => {
        const finalAngle = currentAngle % (2 * Math.PI);
        const segmentAngle = (2 * Math.PI) / segments.length;
        const winningSegmentIndex = Math.floor((2 * Math.PI - finalAngle) / segmentAngle) % segments.length;
        return segments[winningSegmentIndex];
    };

    const spin = () => {
        if (isSpinning) return;
        setIsSpinning(true);
        let lastTimestamp;

        const spinAnimation = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const progress = timestamp - lastTimestamp;
            lastTimestamp = timestamp;

            if (spinVelocity > 0) {
                currentAngle += spinVelocity; // Cập nhật góc quay hiện tại
                spinVelocity -= spinDeceleration; // Giảm tốc độ quay
                drawWheel();
                requestAnimationFrame(spinAnimation);
            } else {
                setIsSpinning(false);
                const result = calculateResult();
                setResult(result); // Cập nhật kết quả
                drawWheel(); // Vẽ lại vòng quay cuối cùng
                drawIndicator(); // Đảm bảo chỉ báo vẫn hiển thị
                onSpinEnd && onSpinEnd(result);
            }
        };

        requestAnimationFrame(spinAnimation);
    };

    return (
        <>
            <canvas ref={canvasRef} width="300" height="300"></canvas>
            <button onClick={spin} disabled={isSpinning}>Quay</button>
            {result && <p>Kết quả: {result}</p>} {/* Hiển thị kết quả */}
        </>
    );
};

export default WheelOfFortune;
