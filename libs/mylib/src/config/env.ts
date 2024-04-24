import { config } from 'dotenv-flow';
import { ObjectShape, object } from 'yup';

export class Env {
  private constructor(private readonly _parameters: Record<string, string | undefined>) {}

  public static async initialize() {
    const output = config({
      silent: true,
    });
    if (output.error) {
      throw new Error(`Could not parse environment: ${output.error?.message}`);
    }
    return new Env(process.env);
  }

  public async validate<T extends ObjectShape>(schema: T) {
    return object(schema).validate(this._parameters, {
      stripUnknown: true,
    });
  }
}
