import {
  FaLink,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaSnapchat,
  FaYoutube,
  FaPinterest,
  FaReddit,
  FaTumblr,
  FaTwitch,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaMedium,
  FaSoundcloud,
  FaSpotify,
  FaBandcamp,
  FaDev,
  FaBehance,
  FaDribbble,
  FaVimeo,
  FaFlickr,
  Fa500Px,
  FaSteam,
  FaDiscord,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaSignal,
  FaSkype,
  FaSlack,
  FaGoogle,
  FaApple,
  FaMicrosoft,
  FaAmazon,
  FaEbay,
  FaEtsy,
  FaPaypal,
  FaBitcoin,
  FaEthereum,
  FaStripe,
  FaBootstrap,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaSass,
  FaLess,
  FaJs,
  FaDocker,
  FaAws,
} from 'react-icons/fa';

export const GetIcon = (domain: string) => {
  switch (domain) {
    case 'facebook.com':
      return FaFacebook;
    case 'twitter.com':
      return FaTwitter;
    case 'instagram.com':
      return FaInstagram;
    case 'snapchat.com':
      return FaSnapchat;
    case 'youtube.com':
      return FaYoutube;
    case 'pinterest.com':
      return FaPinterest;
    case 'reddit.com':
      return FaReddit;
    case 'tumblr.com':
      return FaTumblr;
    case 'twitch.tv':
      return FaTwitch;
    case 'github.com':
      return FaGithub;
    case 'linkedin.com':
      return FaLinkedin;
    case 'stackoverflow.com':
      return FaStackOverflow;
    case 'medium.com':
      return FaMedium;
    case 'soundcloud.com':
      return FaSoundcloud;
    case 'spotify.com':
      return FaSpotify;
    case 'bandcamp.com':
      return FaBandcamp;
    case 'dev.to':
      return FaDev;
    case 'behance.net':
      return FaBehance;
    case 'dribbble.com':
      return FaDribbble;
    case 'vimeo.com':
      return FaVimeo;
    case 'flickr.com':
      return FaFlickr;
    case '500px.com':
      return Fa500Px;
    case 'store.steampowered.com':
      return FaSteam;
    case 'discord.com':
      return FaDiscord;
    case 'tiktok.com':
      return FaTiktok;
    case 'whatsapp.com':
      return FaWhatsapp;
    case 'telegram.org':
      return FaTelegram;
    case 'signal.org':
      return FaSignal;
    case 'skype.com':
      return FaSkype;
    case 'slack.com':
      return FaSlack;
    case 'google.com':
      return FaGoogle;
    case 'apple.com':
      return FaApple;
    case 'microsoft.com':
      return FaMicrosoft;
    case 'amazon.com':
      return FaAmazon;
      return FaEbay;
    case 'etsy.com':
      return FaEtsy;
    case 'paypal.com':
      return FaPaypal;
    case 'bitcoin.org':
      return FaBitcoin;
    case 'ethereum.org':
      return FaEthereum;
    case 'stripe.com':
      return FaStripe;
    case 'getbootstrap.com':
      return FaBootstrap;
    case 'reactjs.org':
      return FaReact;
    case 'vuejs.org':
      return FaVuejs;
    case 'angular.io':
      return FaAngular;
    case 'nodejs.org':
      return FaNodeJs;
    case 'php.net':
      return FaPhp;
    case 'java.com':
      return FaJava;
    case 'python.org':
      return FaPython;
    case 'html.com':
      return FaHtml5;
    case 'css-tricks.com':
      return FaCss3;
    case 'sass-lang.com':
      return FaSass;
    case 'lesscss.org':
      return FaLess;
    case 'javascript.com':
      return FaJs;
    case 'docker.com':
      return FaDocker;
    case 'paypal.me':
      return FaPaypal;
    case 'aws.amazon.com':
      return FaAws;
    default:
      return FaLink;
  }
};
