import React from 'react';
import './App.css';

const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15496.389317506178!2d100.6363349!3d13.8331938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd73bad6f66402082!2sSunspace%20Associate!5e0!3m2!1sth!2sth!4v1643042246304!5m2!1sth!2sth" <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15496.389317506178!2d100.6363349!3d13.8331938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd73bad6f66402082!2sSunspace%20Associate!5e0!3m2!1sth!2sth!4v1643042246304!5m2!1sth!2sth" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'

const Contact = () => {
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
      }

    return (
        <div className='contact'>
            <div className='contact__address'>
                <h1>ติดต่อเราได้ที่</h1>
                <p>Sunspace associate | 41/8 ซอยนวลจันทร์ 25 แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10230</p>
            </div>
            <div className='contact__map'>
                <Iframe iframe={iframe} />
            </div>
        </div>
    );
};

export default Contact;
