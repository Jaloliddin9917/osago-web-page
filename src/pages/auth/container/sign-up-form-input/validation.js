const REQUIRED_FIELD = 'Toldirishni talab qilinadi';

export const loginValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
        if(value.match(/[а-яА-Я]/)) {
            return 'Emailingizni tegshiring'
        }

        return true;
    }
};

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
        if(value.length < 6) {
            return 'Parol tekshiring 6-ta sozdan kam bolmasin'
        }

        return true;
    }
};