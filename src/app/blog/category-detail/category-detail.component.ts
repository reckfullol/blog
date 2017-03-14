import {Component, OnInit} from "@angular/core";
import {PostsService} from "../shared/posts.service";
import {ActivatedRoute, Params} from "@angular/router";
import {LogFactory} from "../../shared/log.factory";
import {BlogTitleService} from "../shared/blog.title.service";
import {routerTransition} from "../../shared/router.animations";

@Component({
  providers: [
    PostsService,
    BlogTitleService
  ],
  selector: 'category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  animations:[routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class CategoryDetailComponent implements OnInit {

  constructor(private logFactory: LogFactory,
              private posts: PostsService,
              private titleService:BlogTitleService,
              private route: ActivatedRoute) {
  }

  private logger = this.logFactory.getLog(CategoryDetailComponent.name);
  private categoryName = '';
  private postList = [];

  ngOnInit() {
    let vm = this;
    vm.queryPostList();
  }

  queryPostList(){
    let vm = this;
    vm.route.params.switchMap(function (params: Params) {
      let categoryName = params['categoryName'];
      vm.logger.info('Load Post by Category:',categoryName);
      vm.categoryName = categoryName;
      vm.titleService.setTitle('Category:'+categoryName);
      return vm.posts.queryByCategoryName(categoryName);
    }).subscribe(function (postList) {
      vm.postList = postList;
      vm.logger.info('Query Posts:', vm.postList.length);
    });
  }
}
