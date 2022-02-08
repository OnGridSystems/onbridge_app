import { Footer as FooterStyled, FooterIcons } from './Footer.module.scss'

export function Footer() {

  return <div className={FooterStyled}>
      <div>
        <div className={FooterIcons}>
          <a href='https://medium.com/onbridge' target="_blank"><img src="/img/medium.svg" alt="medium" /></a>
          <a href='https://twitter.com/onbridge_io' target="_blank"><img src="/img/twitter.svg" alt="twitter" /></a>
          <a href='https://discord.com/invite/kcNqrgS7' target="_blank"><img src="/img/discord.svg" alt="discord" /></a>
        </div>
        <div>
          <p>Incubated by Binance. Supported by Polygon.</p>
        </div>
      </div>
    </div>
}
