import getters from '@/core/store/getters';

describe('core:getters', function() {

  it('# should return title,desc,author,avator from state.config', function() {
    const state = {
      config: {
        title: 'Inner Title',
        description: 'Aquariuslt Blog',
        author: 'Aquariuslt',
        avator: 'http://imgur.com/test.png'
      }
    };

    const resultTitle = getters.title(state);
    const resultDescription = getters.description(state);
    const resultAuthor = getters.author(state);
    const resultAvator = getters.avator(state);
    expect(resultTitle).to.eq('Inner Title');
    expect(resultDescription).to.eq('Aquariuslt Blog');
    expect(resultAuthor).to.eq('Aquariuslt');
    expect(resultAvator).to.eq('http://imgur.com/test.png');
  });

  it('# should return menus from state.menus', function() {
    const menu = {
      expandable: true,
      icon: 'format_list_numbered',
      links: {
        blog: 'category/blog'
      }
    };
    const state = {
      menus: [
        menu
      ]
    };

    const resultMenus = getters.menus(state);
    expect(resultMenus).to.eq(state.menus);
  });

  it('# should return menus from state.config', function() {
    const config = {
      title: '',
      description: '',
      author: '',
      avator: '',
      theme: '',
      nav: {
        categories: {
          enable: true
        },
        tags: {
          enable: true
        },
        about: {
          enable: true
        }
      },
      links: {}
    };

    const state = {
      config: config
    };

    const resultConfig = getters.config(state);
    expect(resultConfig).to.eq(config);
  });

});
