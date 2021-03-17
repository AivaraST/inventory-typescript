export default interface ItemInterface {
    name: string;
    name_hash: string;
    amount: number;
    size: number;
    stack: number;
    use?: Function;
}