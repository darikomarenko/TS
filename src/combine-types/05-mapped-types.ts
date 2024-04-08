type PcBrand = {
    name: string,
    country: string,
    createdAt: Date,
}

type WellKnownBrands = 'apple' | 'lenovo' | 'hp' | 'huawei';

type MyPcRecord = {
    [BrandKey in WellKnownBrands]?: PcBrand
}

const brandRecord: MyPcRecord = {
    apple: {
        country: 'USA',
        createdAt: new Date(),
        name: 'Apple',
    }
}

//type PartOfWindow = {
    //[Key in 'documnent' | 'screen' | 'navigator']?: Window[Key]
//}

//const p: PartOfWindow = {
  //  screen: window.screen,

//}