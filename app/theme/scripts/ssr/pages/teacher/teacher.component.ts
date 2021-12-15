import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./teacher.component.pug";
import {
  TeacherService,
  SectionsService,
  OpenGraphService,
} from "../../services";
import {
  Section,
  PageHeader,
  Teacher,
  replaceBodyPageClass,
  StrapiGqlComponentAttachmentAssetsFragmentFragment,
} from "../../../common";

export interface Scope {
  assets: Teacher["assets"];
  sections: Section[];
  params: TeacherPageComponent["ctx"]["params"];
  header: PageHeader | Record<string, never>;
  teacher?: Teacher;
  title: string;
}

export class TeacherPageComponent extends PageComponent {
  public static tagName = "teacher-page";
  public _debug = false;
  protected autobind = true;

  protected teacher = TeacherService.getInstance();
  protected sections = SectionsService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    sections: [],
    assets: [],
    params: {},
    header: {},
    teacher: undefined,
    title: "Lehrer",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(TeacherPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected getTeacherAssets(teacher: Teacher) {
    const assets = [];
    if (teacher.assets) {
      for (const asset of teacher.assets) {
        if (asset) {
          assets.push(asset);
        }
      }
    }
    return assets;
  }

  protected getAssets(teacher: Teacher, sections: Section[]) {
    const assets: StrapiGqlComponentAttachmentAssetsFragmentFragment[] = [];
    assets.push(...this.sections.getAssetsFromSections(sections));
    assets.push(...this.getTeacherAssets(teacher));
    return assets;
  }

  /**
   * Used if a slug is defined
   */
  protected async setTeacher(slug: string) {
    const teacher = await this.teacher.getDetail(slug);
    this.scope.teacher = teacher;
    this.scope.title = teacher.name;
    return teacher;
  }

  protected async setAssets(teacher: Teacher) {
    this.scope.assets = this.getAssets(teacher, this.scope.sections);
  }

  protected async setHeader(teacher: Teacher) {
    this.scope.header = this.teacher.getHeader([teacher]);
    this.head.title = this.scope.header.title || this.scope.title;
  }

  protected async setOpenGraph(teacher: Teacher) {
    return await this.openGraph.setTeacher(
      {
        title: this.scope.header.title,
      },
      teacher
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.ctx.params?.slug) {
      throw new Error("Slug is not defined!");
    }
    const slug = this.ctx.params.slug;
    if (!slug) {
      throw new Error("URL slug is required!");
    }

    const teacher = await this.setTeacher(slug);
    await this.setAssets(teacher);
    await this.setHeader(teacher);
    await this.setOpenGraph(teacher);
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
