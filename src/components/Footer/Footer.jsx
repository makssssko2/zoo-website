import './Footer.scss';
import Title from "../Title/Title.jsx";
import Paragraph from "../Paragraph/Paragraph.jsx";
const Footer = () => {



    return (
        <footer className={"footer"}>
            <div className="footer__block">
                <Title type="bright" level={5}>Контакты</Title>
                <div className="footer__links">
                    <Paragraph level={4} type="light">+7 (988) 895-11-23</Paragraph>
                    <Paragraph level={4} type="light">+7 (988) 895-11-23</Paragraph>
                    <Paragraph level={4} type="light">+7 (988) 895-11-23</Paragraph>
                </div>
            </div>
            <div className="footer__block">
                <Title type="bright" level={5}>Адрес</Title>
                <div className="footer__links">
                    <Paragraph level={4} type="light">г. Ростов-на-Дону,
                        ул. Мечникова д. 79 кв. 94
                    </Paragraph>
                    <Paragraph level={4} type="light">г. Батайск,
                        ул. Томская д. 47
                    </Paragraph>
                </div>
            </div>
            <div className="footer__block">
                <Title type="bright" level={5}>Ссылки</Title>
                <div className="footer__links">
                    <Paragraph level={4} type="light">Telegram</Paragraph>
                    <Paragraph level={4} type="light">VK</Paragraph>
                    <Paragraph level={4} type="light">Instagram</Paragraph>
                </div>
            </div>
            <div className="footer__block">
                <Title type="bright" level={5}>Меню</Title>
               <div className="footer__links">
                   <Paragraph level={4} type="light">Прайс</Paragraph>
                   <Paragraph level={4} type="light">Животные</Paragraph>
                   <Paragraph level={4} type="light">О нас</Paragraph>
               </div>
            </div>

        </footer>
    )
}

export default Footer;