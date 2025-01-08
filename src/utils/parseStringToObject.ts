type IObject = Record<string, unknown>;

export default (str: string): IObject | null => {
  try {
    return JSON.parse(str) as IObject;
  } catch (error) {
    return {};
  }
};
