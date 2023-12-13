export default {
  projections: {
    ВходСотрудникаE: {
      сотрудник: {
        __caption__: 'Сотрудник',
        фИО: {
          __caption__: 'ФИО'
        },
        должности: {
          __caption__: '',
          должность: {
            __caption__: 'Должность'
          },
          карта: {
            __caption__: '',
            кодКарты: {
              __caption__: 'Номер карты'
            }
          }
        }
      }
    }
  },
  validations: {
    сотрудник: {
      __caption__: 'Сотрудник'
    },
    регистрацВхода: {
      __caption__: 'регистрацВхода'
    }
  }
};
