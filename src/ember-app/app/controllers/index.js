import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.отель.caption'),
          title: i18n.t('forms.application.sitemap.отель.title'),
          children: [{
            link: 'i-i-s-probadevyat-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-сотрудник-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-probadevyat-комната-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-комната-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-probadevyat-карта-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-карта-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-карта-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-probadevyat-гость-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-гость-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-гость-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-probadevyat-должности-l',
            caption: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.отель.i-i-s-probadevyat-должности-l.title'),
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.отель.документы.caption'),
            title: i18n.t('forms.application.sitemap.отель.документы.title'),
            children: [{
              link: 'i-i-s-probadevyat-регистрац-входа-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probadevyat-регистрац-входа-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probadevyat-регистрац-входа-l.title'),
              icon: 'edit',
              children: null
            }, {
              link: 'i-i-s-probadevyat-регистр-гостя-l',
              caption: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probadevyat-регистр-гостя-l.caption'),
              title: i18n.t('forms.application.sitemap.отель.документы.i-i-s-probadevyat-регистр-гостя-l.title'),
              icon: 'calendar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})