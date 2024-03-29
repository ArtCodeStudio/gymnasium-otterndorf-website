/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { LunrService, SuggestService } from '@ribajs/nest-lunr';
import { StrapiService } from '../strapi/strapi.service';
import { NavService } from '../nav';
import { PageService } from '../page';
import { PodcastService } from '../podcast';
import { PostService } from '../post';
import { SchoolSubjectService } from '../school-subject';
import { TeacherService } from '../teacher';
import { WorkingGroupService } from '../workinggroup';
import type { LunrExt, Namespace } from './types';
import { REF_KEYS } from './constants';

/**
 * @see https://github.com/olivernn/lunr-languages/blob/master/lunr.de.js#L380
 */
const IGNORE_SUGGESTION_WORDS =
  'aber alle allem allen aller alles als also am an ander andere anderem anderen anderer anderes anderm andern anderr anders auch auf aus bei bin bis bist da damit dann das dasselbe dazu daß dein deine deinem deinen deiner deines dem demselben den denn denselben der derer derselbe derselben des desselben dessen dich die dies diese dieselbe dieselben diesem diesen dieser dieses dir doch dort du durch ein eine einem einen einer eines einig einige einigem einigen einiger einiges einmal er es etwas euch euer eure eurem euren eurer eures für gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich ihm ihn ihnen ihr ihre ihrem ihren ihrer ihres im in indem ins ist jede jedem jeden jeder jedes jene jenem jenen jener jenes jetzt kann kein keine keinem keinen keiner keines können könnte machen man manche manchem manchen mancher manches mein meine meinem meinen meiner meines mich mir mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seines selbst sich sie sind so solche solchem solchen solcher solches soll sollte sondern sonst um und uns unse unsem unsen unser unses unter viel vom von vor war waren warst was weg weil weiter weitere welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte während würde würden zu zum zur zwar zwischen über';

@Injectable()
export class SearchService implements OnModuleInit {
  constructor(
    readonly lunr: LunrService,
    readonly suggest: SuggestService,
    readonly strapi: StrapiService,
    protected readonly nav: NavService,
    protected readonly page: PageService,
    protected readonly podcast: PodcastService,
    protected readonly post: PostService,
    protected readonly subject: SchoolSubjectService,
    protected readonly teacher: TeacherService,
    protected readonly workingGroup: WorkingGroupService,
  ) {
    this.initLunrPlugins();
    this.initPage();
    this.initNav();
    this.initPodcast();
    this.initPost();
    this.initBlog();
    this.initSchoolSubject();
    this.initTeacher();
    this.initWorkingGroup();
  }

  protected initLunrPlugins() {
    require('lunr-languages/lunr.stemmer.support')(LunrService.lunr);
    require('lunr-languages/lunr.de')(LunrService.lunr);
  }

  protected initPage() {
    const ns: Namespace = 'page';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initNav() {
    const ns: Namespace = 'nav';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 4 } },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initPodcast() {
    const ns: Namespace = 'podcast';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initPost() {
    const ns: Namespace = 'post';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initBlog() {
    const ns: Namespace = 'blog';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    // TODO
    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initSchoolSubject() {
    const ns: Namespace = 'schoolSubject';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initTeacher() {
    const ns: Namespace = 'teacher';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  protected initWorkingGroup() {
    const ns: Namespace = 'workinggroup';

    this.suggest.create(ns);
    this.suggest.ignore(ns, IGNORE_SUGGESTION_WORDS);

    this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [
        { plugin: (LunrService.lunr as unknown as LunrExt).de, args: [] },
      ],
      data: {
        include: true,
        highlight: true,
      },
    });
  }

  public async refreshPage() {
    const ns: Namespace = 'page';
    const pages = await this.page.list();
    this.lunr.reset(ns);
    for (const page of pages) {
      this.lunr.add(ns, page);
      this.suggest.load(ns, page.title, { reset: false });
      this.suggest.load(ns, page.text, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshNav() {
    const ns: Namespace = 'nav';
    const navs = await this.nav.list([]);
    this.lunr.reset(ns);
    for (const nav of navs) {
      this.lunr.add(ns, nav);
      this.suggest.load(ns, nav.title, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshPodcast() {
    const ns: Namespace = 'podcast';
    const podcasts = await this.podcast.list();
    this.lunr.reset(ns);
    for (const podcast of podcasts) {
      this.lunr.add(ns, podcast);
      this.suggest.load(ns, podcast.title, { reset: false });
      this.suggest.load(ns, podcast.text, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshPost() {
    const ns: Namespace = 'post';
    const posts = await this.post.list();
    this.lunr.reset(ns);
    for (const post of posts) {
      this.lunr.add(ns, post);
      this.suggest.load(ns, post.title, { reset: false });
      this.suggest.load(ns, post.text, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshBlog() {
    // TODO
  }

  public async refreshSchoolSubject() {
    const ns: Namespace = 'schoolSubject';
    const subjects = await this.subject.list();
    this.lunr.reset(ns);
    for (const subject of subjects) {
      this.lunr.add(ns, subject);
      this.suggest.load(ns, subject.title, { reset: false });
      this.suggest.load(ns, subject.text, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshTeacher() {
    const ns: Namespace = 'teacher';
    const teachers = await this.teacher.list();
    this.lunr.reset(ns);
    for (const teacher of teachers) {
      this.lunr.add(ns, teacher);
      this.suggest.load(ns, teacher.title, { reset: false });
      this.suggest.load(ns, teacher.text, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshWorkingGroup() {
    const ns: Namespace = 'workinggroup';
    const workinggroups = await this.workingGroup.list();
    this.lunr.reset(ns);
    for (const workinggroup of workinggroups) {
      this.lunr.add(ns, workinggroup);
      this.suggest.load(ns, workinggroup.title, { reset: false });
      this.suggest.load(ns, workinggroup.text, { reset: false });
    }
    this.lunr.buildIndex(ns);
  }

  public async refresh() {
    await this.refreshPage();
    await this.refreshNav();
    await this.refreshPodcast();
    await this.refreshPost();
    await this.refreshBlog();
    await this.refreshSchoolSubject();
    await this.refreshTeacher();
    await this.refreshWorkingGroup();
  }

  onModuleInit() {
    try {
      this.refresh();
    } catch (error) {
      console.error(error);
      // throw error; Ignore error
    }
  }
}
