/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useEffect, useRef, useCallback } from 'react';
import { useLiveAPIContext } from '@/contexts/LiveAPIContext';
import { blobToBase64 } from '@/lib/utils';

export default function CameraView() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { client, connected } = useLiveAPIContext();
    const [error, setError] = React.useState<string | null>(null);

    useEffect(() => {
        async function getCameraStream() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                setError("Camera not supported by this browser.");
                return;
            }
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                console.error("Error accessing camera: ", err);
                setError("Camera access was denied. Please enable camera permissions in your browser settings.");
            }
        }
        getCameraStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    const sendFrame = useCallback(async () => {
        if (connected && videoRef.current && canvasRef.current && videoRef.current.readyState >= 3) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                canvas.toBlob(async (blob) => {
                    if (blob) {
                        const base64Data = await blobToBase64(blob);
                        client.sendRealtimeInput([{
                            mimeType: 'image/jpeg',
                            data: base64Data
                        }]);
                    }
                }, 'image/jpeg', 0.8);
            }
        }
    }, [client, connected]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            sendFrame();
        }, 2000); // Send a frame every 2 seconds

        return () => clearInterval(intervalId);
    }, [sendFrame]);

    return (
        <div className="w-full h-full relative bg-black flex items-center justify-center">
            {error ? (
                <div className="text-center text-white p-4">
                    <p className="font-bold">Camera Error</p>
                    <p className="text-sm text-gray-300">{error}</p>
                </div>
            ) : (
                <>
                    <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover"></video>
                    <canvas ref={canvasRef} className="hidden"></canvas>
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                        Camera Feed
                    </div>
                </>
            )}
        </div>
    );
}
