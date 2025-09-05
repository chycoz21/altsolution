import './index.scss'
import fotoContractur from '../../../data/images/img-project/Fabrication.jpg'

const ContactUsSection = () => {
    return (
        <section className='container-contact-us marg-all' id="contact">
            <div className='img-contact'>
                <img src={fotoContractur} />
            </div>
            <div className='text-contact'>
                <a target="_blank " href='https://api.whatsapp.com/send?phone=6289601961928'>Contact Us</a>
            </div>
        </section>
    )
}

export default ContactUsSection;