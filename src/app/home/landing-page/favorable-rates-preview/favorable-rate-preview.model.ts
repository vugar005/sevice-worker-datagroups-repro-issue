export interface  FavorableRatePreview {
    currencyCode: string;
    rates: Rate[];
  }

  interface Rate {
    buy: Buy;
    standart: Buy;
    sell: Buy;
  }

  interface Buy {
    rate: string;
    lastChange: string;
    bankName: string[];
  }