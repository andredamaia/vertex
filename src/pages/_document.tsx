import Document, { Html, Head, Main, NextScript} from 'next/document';

export default class MyDoxument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/8.5.6/mmenu.min.css" />
                    <title>Vertex</title>
                   
                </Head>

                <body>
                    <Main />

                    <NextScript />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/8.5.6/mmenu.min.js"></script>


                </body>
            </Html>
        )
    }
}