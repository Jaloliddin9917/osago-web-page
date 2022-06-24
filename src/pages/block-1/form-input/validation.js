const REQUIRED_FIELD = 'Toldirishni talab qilinadi';

export const nameValidation = {
    required: REQUIRED_FIELD,
    validate: (value) => {
        if(value.length < 4) {
            return 'xato ism kiritingiz'
        }

        return true;
    }
};