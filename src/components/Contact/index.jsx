import React from 'react';
import './Contact.css';
import { IoIosPin, IoMdCall } from 'react-icons/io';
import { GrMail } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="Contact_container" id="contact">
            <h1>ติดต่อ</h1>
            <div className="Contact_wrapper">
                <div className="Contact_content">
                    <div>
                        <IoIosPin className="Contact_Icon"/>
                        <h5>Address</h5>
                        <p>41/8 ซอยนวลจันทร์ 25 แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10230</p>
                    </div>
                    <div>
                        <GrMail className="Contact_Icon"/>
                        <h5>Mail</h5>
                        <p><a href="mailto:sunspceasso@gmail.com">sunspceasso@gmail.com</a></p>
                    </div>
                    <div>
                        <IoMdCall className="Contact_Icon"/>
                        <h5>Call</h5>
                        <p><a href="tel:086-397-0556">086-397-0556</a><br /><a href="tel:096-828-6566">096-828-6566</a></p>
                    </div>
                    <div>
                        <FaFacebookF className="Contact_Icon"/>
                        <h5>Facebook</h5>
                        <p><a href="https://www.facebook.com/SunspaceAssocites/">SunspaceAssocites</a></p>
                    </div>
                </div>
                <div className='GoogleMap'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.097242813318!2d100.63414621534763!3d13.833198999127774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d63ec42305979%3A0xd73bad6f66402082!2sSunspace%20Associate!5e0!3m2!1sth!2sth!4v1643358282892!5m2!1sth!2sth"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
