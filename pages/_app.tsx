import client from '../lib/apolloClient'
import {ApolloProvider} from 'react-apollo'

import 'bulma/css/bulma.css'
import '../components/main.css'
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import App, {AppInitialProps, AppContext} from 'next/app';
import {store} from '../rdx/stores';
import {Provider} from 'react-redux';
import {MakeStore, createWrapper, Context, HYDRATE} from 'next-redux-wrapper';

class MyApp extends App<AppInitialProps> {

    public static getInitialProps = async ({Component, ctx}: AppContext) => {

        // ctx.store.dispatch({type: 'TOE', payload: 'was set in _app'});

        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
                // Some custom thing for all pages
                pathname: ctx.pathname,
            },
        };

    };

    public render() {
        const {Component, pageProps} = this.props;

        return (
          <ApolloProvider client={client}>
            {/* <Provider store={store}>  */}
              <Component {...pageProps} />


              <style jsx global>{`
                  @font-face {
                    font-family: 'tourFont';
                    src: url('/fonts/PlayfairDisplay-VariableFont_wght.ttf');
                    // font-weight: bold;
                    // font-style: normal;
                    // font-display: swap;
                  }
                `}</style>
              {/* </Provider> */}
          </ApolloProvider>
            // <Component {...pageProps} />
        );
    }
}

export interface State {
  
}


const makeStore: MakeStore<State> = (context: Context) => store;

export const wrapper = createWrapper<State>(makeStore, {debug: true});

export default wrapper.withRedux(MyApp);