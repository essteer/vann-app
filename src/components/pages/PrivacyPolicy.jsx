import Page from "../Page";

const PrivacyPolicy = () => {

    const title = 'Privacy policy';
    const subtitles = [
        'Personal data',
        'Third parties'
    ]
    const text = [
        'We will use the personal information you provide to us through our website to supply products to you; to process your payment for products; and to update you with our latest news if you subscribe to our mailing list.',
        'We will only provide personal information to third parties as the law requires or permits us to do so.'
    ];

    return (
        <Page title={title} subtitles={subtitles} text={text} />
    )
}

export default PrivacyPolicy