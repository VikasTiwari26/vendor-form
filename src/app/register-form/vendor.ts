export class Vendor {
    constructor(
        public lat ?: number,
        public long ?: number,
        public city ?: string,
        public state ?: string,
        public country ?: string,
        public pincode ?: number,
        public name ?: string,
        public email ?: string,
        public phone ?: number,
        public primary_type ?: number,
        public secondary_type ?: number,
        public vendor_name ?:string,
        public vendor_telephone ?: number,
        public address ?: string,
    ){}
}