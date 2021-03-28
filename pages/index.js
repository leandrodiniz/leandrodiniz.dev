import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>&lrm;</title>
        <meta charset="utf-8" />
        <meta content="Leandro Diniz is a Software Engineer a software engineer who specializes in UI development for web application products." name="description" />
        <meta content="https://leandrodiniz.dev" name="url" />
        <meta content="Leandro Diniz" name="title" />
        <meta content="unico, Acesso Digital, Leandro Diniz, Diniz, rxjs, angular, accessibility, typescript, ngrx, css, design, developer, es2015, es6, awwwards, idtech, functional programming, pwa, javascript, js, leadership, a11y, tech, technical leadership, frontend, ui developer, ux" name="keywords" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta content="Leandro Diniz is a Software Engineer a software engineer who specializes in UI development for web application products." name="twitter:description" />
        <meta content="Leandro Diniz"name="twitter:title" />
        <meta content="@leandro_diniz" name="twitter:site" />
        <meta content="Leandro Diniz is a Software Engineer a software engineer who specializes in UI development for web application products." property="og:description" />
        <meta content="Leandro Diniz"property="og:title" />
        <meta content="en_US" property="og:locale" />
        <meta content="Leandro Diniz is a Software Engineer a software engineer who specializes in UI development for web application products." name="twitter:description" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/idu6hdx.css"></link>
      </Head>
      <main className={styles.main}>
        <section>
          <img src="/leandro-diniz.png"  width="150" className={styles.imgProfile}/>
          <h1 className={styles.title}>Leandro Diniz</h1>
          <div className={styles.description}>
            <p>I am a Software Engineer who specializes in UI development for web application products.</p>
            <p>Currently at <a href="https://unico.io/" target="_blank">unico</a>, I am working on making the relationship between people and companies simpler, safer and more accessible.</p>
            <p>I've launched web applications for some of the world’s most respected brands such as HBO, AMD, Doctors Without Borders, among others.</p>
            <p>You can find me on <a href="https://github.com/leandrodiniz" target="_blank">GitHub</a>, <a href="https://twitter.com/leandro_diniz" target="_blank">Twitter</a> or <a href="https://www.linkedin.com/in/leandrodiniz/" target="_blank">LinkedIn.</a></p>
          </div>
        </section>
      </main> 
    </div>
  )
}
