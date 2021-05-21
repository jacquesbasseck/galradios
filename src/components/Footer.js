import React from 'react';
import { CaretUpOutlined, HeartOutlined, HeartTwoTone } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className="foot">
            <div className="container">
                <p className="float-end mb-1">
                    <a href="#"><CaretUpOutlined /></a>
                </p>
                <div className="section-1">
                    <p className="mb-1">&copy; {new Date().getFullYear()}</p>
                </div>
                <div className="last-section">
                    <div>
                        Made with <span className="coeur"> <HeartTwoTone twoToneColor="#7c0a02" /></span> Jabass
                    </div>
                </div>
            </div>
        </footer>
    );
}
