import { BigInt, Bytes } from '@graphprotocol/graph-ts';
import { MarketItemListed, MarketListingRemoved, MarketSaleCreated, PriceUpdated } from '../generated/KoalasMarketplace/KoalasMarketplace';
import { MarketItem, User } from '../generated/schema';

export function handleMarketItemListed(event: MarketItemListed): void {
  let tokenId = event.params.tokenId.toString();

  let marketItem = new MarketItem(tokenId);
  marketItem.tokenId = event.params.tokenId;
  marketItem.seller = event.params.seller.toHexString();
  marketItem.owner = event.params.owner;
  marketItem.price = event.params.price;
  marketItem.isListed = event.params.isListed;

  marketItem.save();

  let user = User.load(event.params.seller.toHexString());
  if (user == null) {
    user = new User(event.params.seller.toHexString());
    user.save();
  }

}

export function handleMarketListingRemoved(event: MarketListingRemoved): void {
  let tokenId = event.params.tokenId.toString();

  let marketItem = MarketItem.load(tokenId);
  if (marketItem){
    marketItem.isListed = false;
    marketItem.save();
  }
}

export function handleMarketSaleCreated(event: MarketSaleCreated): void {
  let tokenId = event.params.tokenId.toString();

  let marketItem = MarketItem.load(tokenId);
  if (marketItem) {
    marketItem.isListed = false;
    marketItem.owner = event.params.buyer; // Assuming buyer is an address
    marketItem.seller = event.params.seller.toHexString(); 
    marketItem.save();
    
    let user = User.load(event.params.seller.toHexString());
    if (user == null) {
      user = new User(event.params.seller.toHexString());
      user.save();
    }
    
  }

}

export function handlePriceUpdated(event: PriceUpdated): void {
  let tokenId = event.params.tokenId.toString();

  let marketItem = MarketItem.load(tokenId);
  if (marketItem) {
    marketItem.price = event.params.price;
    marketItem.save();
  }
}

