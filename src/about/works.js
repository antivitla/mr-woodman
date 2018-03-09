import Vue from 'vue/dist/vue.min.js';
import data from './works-data.js';

var works = {
  data: data
};

works.app = new Vue({
  el: '#works',
  data: function () {
    return {
      workId: 0,
      pageId: 0,
      domain: 'works.mr-woodman.ru/',
      devices: ['desktop', 'tablet', 'mobile'],
      lang: 'ru',
    };
  },
  created () {
    var workId = localStorage.getItem('mrWoodmanAboutWorkId');
    if (workId) {
      this.workId = parseInt(workId, 10);
      if (this.workId < 0) {
        this.workId = 0;
      } else if (this.workId > works.data.length - 1) {
        this.workId = works.data.length - 1;
      }
    }
    this.lang = document.documentElement.getAttribute('lang') || 'en';
  },
  computed: {
    work: function () {
      var work = works.data[works.data.length - this.workId - 1];
      return work || works.data[works.data.length - 1];
    },
    workTitle: function () {
      return typeof this.work.title === 'string' ? this.work.title : this.work.title[this.lang];
    },
    workDescription: function () {
      return typeof this.work.description === 'string' ? this.work.description : this.work.description[this.lang];
    },
    page: function () {
      return this.work.pages[this.pageId];
    },
    hasNext: function () {
      return this.workId > 0;
    },
    hasPrev: function () {
      return this.workId < works.data.length - 1;
    }
  },
  methods: {
    nextWork: function () {
      if (this.hasNext) {
        this.workId = this.workId - 1;
        localStorage.setItem('mrWoodmanAboutWorkId', this.workId)
        this.pageId = 0;
      }
    },
    prevWork: function () {
      if (this.hasPrev) {
        this.workId = this.workId + 1;
        localStorage.setItem('mrWoodmanAboutWorkId', this.workId)
        this.pageId = 0;
      }
    },
    hasDevice: function (work, device) {
      return this.work.devices.search(device) > -1;
    },
    getPath: function (work) {
      if(this.page.search("//") > -1) {
        return this.protocolize(this.page);
      } else {
        return this.protocolize(this.domain + this.work.path + this.page);
      }
    },
    protocolize: function (href) {
      return window.location.protocol + '//' + href.split('//').slice(-1)[0]
    },
    getAlive: function (work) {
      if(!this.work.alive) {
        return "";
      } else {
        return this.work.alive
          .split("#")[0]
          .split("?")[0]
          .split("//").slice(-1)[0];
      }
    },
    isActivePage: function (page) {
      return this.work.pages.indexOf(page) === this.pageId;
    },
    setPage: function (page) {
      this.pageId = this.work.pages.indexOf(page);
    }
  }
});
