import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item("Thing1", 50, 49),
    new Item("Thing2", 1, 1),
    new Item("Thing3", 4, 10),
    new Item("Aged Brie", 50, 49),
    new Item("Aged Brie", 1, 4),
    new Item("Aged Brie", 3, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 11, 4),
    new Item("Backstage passes to a TAFKAL80ETC concert", 6, 4),
    new Item("Backstage passes to a TAFKAL80ETC concert", 1, 50),
    new Item("Sulfuras, Hand of Ragnaros", 1, 80),
    new Item("Sulfuras, Hand of Ragnaros", 50, 1)
    ];

const gildedRose = new GildedRose(items);
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();
console.log(gildedRose.items);