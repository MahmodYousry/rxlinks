import { Component, signal } from '@angular/core';
import { Link } from "../link/link";
import { ILinks } from '../../models';
import { Search } from '../search/search';

@Component({
  selector: 'app-main-links',
  imports: [Link, Search],
  templateUrl: './main-links.html',
  styleUrl: './main-links.scss'
})
export class MainLinks {

  originalLinks = signal<ILinks[]>([
    // AI
    { title: 'Chat gpt', url: 'https://chatgpt.com/', img: '/imgs/app-icons/ChatGPT-Logo.svg.png', category: 'AI' },
    { title: 'Grok', url: 'https://grok.com/', img: 'imgs/app-icons/grok.png', category: 'AI' },
    { title: 'Claude ai', url: 'https://claude.ai/', img: 'imgs/app-icons/claude-ai.png', category: 'AI' },
    { title: 'DeepSeek', url: 'http://chat.deepseek.com/', img: 'imgs/app-icons/DeepSeek_logo_icon.png', category: 'AI' },
    { title: 'Perplexity', url: 'https://www.perplexity.ai/', img: 'imgs/app-icons/perplexitypng.png', category: 'AI' },
    { title: 'Manus', url: 'https://manus.im/', img: 'imgs/app-icons/manus.png', category: 'AI' },
    { title: 'Gemini', url: 'https://gemini.google.com/', img: 'imgs/app-icons/google-gemini.webp', category: 'AI' },
    { title: 'Cobalt', url: 'https://cobalt.tools/', img: 'imgs/app-icons/smile.png', category: 'AI' },
    { title: 'Z Ai', url: 'https://z.ai/', img: 'imgs/app-icons/z.ai.webp', category: 'AI' },
    { title: 'Blackbox', url: 'https://www.blackbox.ai/', img: 'imgs/app-icons/blackbox-icon.png', category: 'AI' },

    // Popular
    { title: 'Search', url: 'https://google.com/', img: 'imgs/app-icons/google.png', category: 'Popular' },
    { title: 'Image', url: 'https://www.google.com/imghp?hl=en&authuser=0&ogbl', img: 'imgs/app-icons/google_images.png', category: 'Popular' },
    { title: 'Translator', url: 'https://translate.google.com.eg/?hl=ar&tab=TT', img: 'imgs/app-icons/google_translate.png', category: 'Popular' },
    { title: 'Meet', url: 'https://meet.google.com/', img: 'imgs/app-icons/google-meet-512.webp', category: 'Popular' },
    { title: 'Gmail', url: 'https://mail.google.com/', img: 'imgs/app-icons/63ed1f028c1c9e76de764490_Gmail Logo.svg', category: 'Popular' },
    { title: 'Hotmail', url: 'https://outlook.live.com/mail/0/', img: 'imgs/app-icons/MOutlook.png', category: 'Popular' },
    { title: 'Yahoo Mail', url: 'https://mail.yahoo.com/', img: 'imgs/app-icons/yahoo-mail-icon-32189.png', category: 'Popular' },
    { title: 'Youtube', url: 'http://www.youtube.com/', img: 'imgs/app-icons/yt-logo.png', category: 'Popular' },
    { title: 'Y2mate', url: 'https://v4.www-y2mate.com/', img: 'imgs/app-icons/y2mate.png', category: 'Popular' },

    // Social
    { title: 'Linkedin', url: 'https://linkedin.com', img: 'imgs/app-icons/LinkedIn_logo_initials.png', category: 'Social' },
    { title: 'Facebook', url: 'http://fb.com/messages', img: 'imgs/app-icons/fb-icon.png', category: 'Social' },
    { title: 'Messenger', url: 'http://fb.com/messages', img: 'imgs/app-icons/Facebook_Messenger_logo_2020.svg.png', category: 'Social' },
    { title: 'web whats', url: 'http://fb.com/messages', img: 'imgs/app-icons/whatsapp-icon-free-png.webp', category: 'Social' },

    // Games
    { title: 'Empire', url: 'https://empire.goodgamestudios.com/', img: 'imgs/app-icons/goodgame empire.webp', category: 'Games' },
    { title: 'Game3rb', url: 'https://game3rb.com/', img: 'imgs/app-icons/game3rb.png', category: 'Games' },
    { title: 'Chess', url: 'https://chess.com/', img: 'imgs/app-icons/chess_profile.png', category: 'Games' },

    // Pirate
    { title: 'Soap2day', url: 'https://ww25.soap2day.day', img: 'imgs/app-icons/soap2day-icon.png', category: 'Pirate' },
    { title: 'fmovies', url: 'https://ww4.fmovies.co/24/', img: 'imgs/app-icons/FMovies-Logo.png', category: 'Pirate' },
    { title: 'fmovies cat', url: ' https://www.fmovies.cat/', img: 'imgs/app-icons/FMovies-Logo.png', category: 'Pirate' },
    { title: 'yarrlist', url: 'https://yarrlist.com/', img: 'imgs/app-icons/manga.png', category: 'Pirate' },
    { title: 'fmhy', url: 'https://fmhy.pages.dev/videopiracyguide', img: 'imgs/app-icons/3d-rendering-neon-triangle_23-2151293977.avif', category: 'Pirate' },
    { title: 'z-lib', url: 'https://z-lib.gd', img: 'imgs/app-icons/41b30ae11f6d5cdeee5d790b95d005c5855d661957f058b5fc101f56736afeed_200.webp', category: 'Pirate' },
    { title: 'FTU Apps', url: 'https://ftuapps.dev', img: 'imgs/app-icons/ftuapps.dev.png', category: 'Pirate' },
    { title: 'thepiratebay', url: 'https://thepiratebay.org/', img: 'imgs/app-icons/thepiratebay.png', category: 'Pirate' },
    { title: 'rargb', url: 'https://rargb.to', img: 'imgs/app-icons/rargb.png', category: 'Pirate' },
    { title: 'kikass', url: 'https://kikass.to', img: 'imgs/app-icons/kikass.png', category: 'Pirate' },
    { title: 'glodls.to', url: 'https://glodls.to', img: 'imgs/app-icons/torrent-galaxy.webp', category: 'Pirate' },
    { title: 'Galaxy', url: 'http://galaxy2gchufcb3z.onion', img: 'imgs/app-icons/torrent-galaxy.webp', category: 'Pirate' },
    { title: 'Mutaz', url: 'https://mutaz.net/', img: 'imgs/app-icons/mutaz.net_logo_Big.webp', category: 'Pirate' },

    // Images & photos
    { title: 'Photopea', url: 'https://www.photopea.com/', img: 'imgs/app-icons/Photopea_logo.svg.png', category: 'Images & Photos' },

    // Web Technologies
    { title: 'Laravel', url: 'https://laravel.com/', img: 'imgs/app-icons/Laravel.svg.png', category: 'Web Technologies' },
    { title: 'Angular', url: 'https://angular.io/', img: 'imgs/app-icons/icone-angulaire-rouge.png', category: 'Web Technologies' },
    { title: 'Bootstrap', url: 'https://getbootstrap.com/', img: 'imgs/app-icons/bootstrap_icon.png', category: 'Web Technologies' },
    { title: 'Github', url: 'http://github.com', img: 'imgs/app-icons/github.png', category: 'Web Technologies' },
    { title: 'insight', url: 'https://pagespeed.web.dev/', img: 'imgs/app-icons/insight.png', category: 'Web Technologies' },
    { title: 'Font awesome', url: 'https://fontawesome.com/icons', img: 'imgs/app-icons/font-awesome-logo-png_seeklogo-336114.png', category: 'Web Technologies' },

    // Subtitles
    { title: 'subdl', url: 'https://subdl.com/', img: 'imgs/app-icons/subdl_231255.webp', category: 'Subtitles' },
    { title: 'opensubtitles', url: 'https://www.opensubtitles.org/en/search/subs', img: 'imgs/app-icons/OpenSubtitles.org_.png', category: 'Subtitles' },
    { title: 'subtitlecat', url: 'https://subtitlecat.com/', img: 'imgs/app-icons/subtitlecat.png', category: 'Subtitles' },

    // Others
    { title: '1377x', url: 'https://1377x.to/', img: 'imgs/app-icons/1377x.webp', category: 'Others' },
    { title: 'pdfdrive', url: 'https://pdfdrive.com/', img: 'imgs/app-icons/pdfdrive.png', category: 'Others' },
    { title: 'Watch.ug', url: 'https://Watch.ug', img: 'imgs/app-icons/41b30ae11f6d5cdeee5d790b95d005c5855d661957f058b5fc101f56736afeed_200.webp', category: 'Others' }
  ]);

  links = signal<ILinks[]>([]);

  ngOnInit() {
    // Initialize links with the original links
    this.links.set(this.originalLinks());
  }

  get categories() {
    // Get unique category names
    return [...new Set(this.links().map(link => link.category))];
  }

  linksByCategory(category: string) {
    return this.links().filter(link => link.category === category);
  }

  onSearchValueChange(searchKey: string) {
    if (!searchKey) {
      return this.links.set(this.originalLinks());
    }

    const filteredLinks = this.originalLinks().filter(link =>
      link.title.toLowerCase().includes(searchKey.toLowerCase()) ||
      link.category.toLowerCase().includes(searchKey.toLowerCase())
    );

    this.links.set(filteredLinks);

    if (filteredLinks.length === 0) {
      this.links.set([{ title: 'No results found', url: '', img: '', category: '' }]);
    }

    console.log('Filtered Links:', filteredLinks);
    console.log('Filtered Links:', searchKey);
  }





}
