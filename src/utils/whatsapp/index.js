
import { RiWhatsappLine } from "react-icons/ri";

const WhatsApp = () => {
    return(
        <a
            className="whatsapp_float"
            href="https://api.whatsapp.com/send?phone=525543416012"
            target="_blank"
            rel="noopener noreferrer"
        >
            <RiWhatsappLine color={"#FFF"} />
        </a>
    )
}

export default WhatsApp;