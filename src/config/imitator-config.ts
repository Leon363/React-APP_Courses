export type ImitatorAction = {
    prob: number;
    action: string
}
export const imitatorActions: ImitatorAction[] = [
    {prob: 40, action: 'nothing'},
    {prob: 65, action: 'add'},
    {prob: 90, action: 'update'},
    {prob: 100, action: 'remove'}
  ]