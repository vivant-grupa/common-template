import {
  HttpException,
  HttpStatus,
  ValidationPipeOptions,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

const validationOptions: ValidationPipeOptions = {
  transform: true,
  whitelist: true,
  errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  exceptionFactory: (errors: ValidationError[]) => new HttpException(
    {
      status: HttpStatus.UNPROCESSABLE_ENTITY,
      message:
          'There was an error processing your request. Please verify your input and try again.',
      errors: errors.reduce(
        (accumulator, currentValue) => ({
          ...accumulator,
          [currentValue.property]: Object.values(
            currentValue.constraints ?? {},
          ).join(', '),
        }),
        {},
      ),
    },
    HttpStatus.UNPROCESSABLE_ENTITY,
  ),
};

export { validationOptions };
