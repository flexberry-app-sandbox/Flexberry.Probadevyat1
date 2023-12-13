import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbadevyatГостьLForm from './forms/i-i-s-probadevyat-гость-l';
import IISProbadevyatДолжностиLForm from './forms/i-i-s-probadevyat-должности-l';
import IISProbadevyatКартаLForm from './forms/i-i-s-probadevyat-карта-l';
import IISProbadevyatКомнатаLForm from './forms/i-i-s-probadevyat-комната-l';
import IISProbadevyatРегистрГостяLForm from './forms/i-i-s-probadevyat-регистр-гостя-l';
import IISProbadevyatРегистрацВходаLForm from './forms/i-i-s-probadevyat-регистрац-входа-l';
import IISProbadevyatСотрудникLForm from './forms/i-i-s-probadevyat-сотрудник-l';
import IISProbadevyatГостьEForm from './forms/i-i-s-probadevyat-гость-e';
import IISProbadevyatДолжностиEForm from './forms/i-i-s-probadevyat-должности-e';
import IISProbadevyatКартаEForm from './forms/i-i-s-probadevyat-карта-e';
import IISProbadevyatКомнатаEForm from './forms/i-i-s-probadevyat-комната-e';
import IISProbadevyatРегистрГостяEForm from './forms/i-i-s-probadevyat-регистр-гостя-e';
import IISProbadevyatРегистрацВходаEForm from './forms/i-i-s-probadevyat-регистрац-входа-e';
import IISProbadevyatСотрудникEForm from './forms/i-i-s-probadevyat-сотрудник-e';
import IISProbadevyatВходГостяModel from './models/i-i-s-probadevyat-вход-гостя';
import IISProbadevyatВходСотрудникаModel from './models/i-i-s-probadevyat-вход-сотрудника';
import IISProbadevyatГостьModel from './models/i-i-s-probadevyat-гость';
import IISProbadevyatДолжностиModel from './models/i-i-s-probadevyat-должности';
import IISProbadevyatКартаModel from './models/i-i-s-probadevyat-карта';
import IISProbadevyatКомнатаModel from './models/i-i-s-probadevyat-комната';
import IISProbadevyatРегистрГостяModel from './models/i-i-s-probadevyat-регистр-гостя';
import IISProbadevyatРегистрацВходаModel from './models/i-i-s-probadevyat-регистрац-входа';
import IISProbadevyatСотрудникModel from './models/i-i-s-probadevyat-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probadevyat-вход-гостя': IISProbadevyatВходГостяModel,
    'i-i-s-probadevyat-вход-сотрудника': IISProbadevyatВходСотрудникаModel,
    'i-i-s-probadevyat-гость': IISProbadevyatГостьModel,
    'i-i-s-probadevyat-должности': IISProbadevyatДолжностиModel,
    'i-i-s-probadevyat-карта': IISProbadevyatКартаModel,
    'i-i-s-probadevyat-комната': IISProbadevyatКомнатаModel,
    'i-i-s-probadevyat-регистр-гостя': IISProbadevyatРегистрГостяModel,
    'i-i-s-probadevyat-регистрац-входа': IISProbadevyatРегистрацВходаModel,
    'i-i-s-probadevyat-сотрудник': IISProbadevyatСотрудникModel
  },

  'application-name': 'Probadevyat',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probadevyat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probadevyat',
          title: 'Probadevyat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        probadevyat: {
          caption: 'Probadevyat',
          title: 'Probadevyat',
          'i-i-s-probadevyat-регистр-гостя-l': {
            caption: 'Регистр гостя',
            title: ''
          },
          'i-i-s-probadevyat-регистрац-входа-l': {
            caption: 'Регистрац входа',
            title: ''
          },
          'i-i-s-probadevyat-комната-l': {
            caption: 'Комната',
            title: ''
          },
          'i-i-s-probadevyat-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-probadevyat-карта-l': {
            caption: 'Карта',
            title: ''
          },
          'i-i-s-probadevyat-гость-l': {
            caption: 'Гость',
            title: ''
          },
          'i-i-s-probadevyat-должности-l': {
            caption: 'Должности',
            title: ''
          }
        },
        отель: {
          caption: 'Отель',
          title: 'Отель',
          'i-i-s-probadevyat-сотрудник-l': {
            caption: 'Сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-probadevyat-комната-l': {
            caption: 'Комната',
            title: 'Комната'
          },
          'i-i-s-probadevyat-карта-l': {
            caption: 'Карта',
            title: 'Карта'
          },
          'i-i-s-probadevyat-гость-l': {
            caption: 'Гость',
            title: 'Гость'
          },
          'i-i-s-probadevyat-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probadevyat-регистрац-входа-l': {
              caption: 'Регистрация входа',
              title: 'Регистрац входа'
            },
            'i-i-s-probadevyat-регистр-гостя-l': {
              caption: 'Регистрация гостя',
              title: 'Регистр гостя'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probadevyat-гость-l': IISProbadevyatГостьLForm,
    'i-i-s-probadevyat-должности-l': IISProbadevyatДолжностиLForm,
    'i-i-s-probadevyat-карта-l': IISProbadevyatКартаLForm,
    'i-i-s-probadevyat-комната-l': IISProbadevyatКомнатаLForm,
    'i-i-s-probadevyat-регистр-гостя-l': IISProbadevyatРегистрГостяLForm,
    'i-i-s-probadevyat-регистрац-входа-l': IISProbadevyatРегистрацВходаLForm,
    'i-i-s-probadevyat-сотрудник-l': IISProbadevyatСотрудникLForm,
    'i-i-s-probadevyat-гость-e': IISProbadevyatГостьEForm,
    'i-i-s-probadevyat-должности-e': IISProbadevyatДолжностиEForm,
    'i-i-s-probadevyat-карта-e': IISProbadevyatКартаEForm,
    'i-i-s-probadevyat-комната-e': IISProbadevyatКомнатаEForm,
    'i-i-s-probadevyat-регистр-гостя-e': IISProbadevyatРегистрГостяEForm,
    'i-i-s-probadevyat-регистрац-входа-e': IISProbadevyatРегистрацВходаEForm,
    'i-i-s-probadevyat-сотрудник-e': IISProbadevyatСотрудникEForm
  },

});

export default translations;
