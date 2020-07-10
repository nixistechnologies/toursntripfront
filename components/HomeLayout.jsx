import Head from 'next/head'
import {ApolloProvider} from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import client from '../lib/apolloClient';
import { withRouter, Router } from 'next/router'


class HomeLayout extends React.Component{
    constructor(props){
        super(props)
    }
    static async getInitialProps({ req }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }


    render(){
        const { children,title = "BACARDI",navbar=true,description,image,currentURL } = this.props;
        return(
            <>
            <div>
                <ApolloProvider client={client}>
                    <ApolloHooksProvider client={client}>
                        <Head>
                            <meta name="viewport" content="width=device-width, initial-scale=1" />
                            <meta charSet="utf-8" />
                            <title>{title}</title>
                            <meta name="description" content={description}></meta>
                            <meta property="og:url" content={currentURL} key="ogurl" />
                            <meta property="og:image" content={image} key="ogimage" />
                            <meta property="og:site_name" content={"ToursNtrip"} key="ogsitename" />
                            <meta property="og:title" content={title} key="ogtitle" />
                            <meta property="og:description" content={description} key="ogdesc" />
                        </Head>

                        <section>
                            {children}
                        </section>
                    </ApolloHooksProvider>
                </ApolloProvider>
            </div>
            </>
        )
    }
}

export default withRouter(HomeLayout);