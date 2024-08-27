import Page from "../Page";

const About = () => {

    const title = 'About';
    const subtitles = [
        'Simple yet vibrant — bold and wondrous'
    ]
    const text = [
        'VANN envisions jewellery as a platform to channel art, fashion, craft and technology. Visualised using 3D, illustration, drawing and hand-fabrication techniques, VANN is devoted to combining innovative solutions with traditional craftsmanship. Known for creating jewellery pieces that are bold artistic statements, our designs are comfortable, allowing wearers the chance to push style boundaries every day. VANN takes creative risks that continuously challenge existing aesthetic conventions. Defining a new metal language, our jewellery speaks from a perspective that is always strong, fresh and relevant.',
    ];

    return (
        <Page title={title} subtitles={subtitles} text={text} />
    )
}

export default About






 

