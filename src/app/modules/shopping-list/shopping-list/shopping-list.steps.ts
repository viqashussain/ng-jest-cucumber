import { defineFeature, loadFeature } from 'jest-cucumber';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ShoppingListItem } from '../../models/shopping-list-item';

const feature = loadFeature('./shopping-list.feature', { loadRelativePath: true });
let component: ShoppingListComponent;
let fixture: ComponentFixture<ShoppingListComponent>;

const whenIGoToTheShoppingListComponent = when => {
    when(/I go to the shopping list component/, () => {
        fixture = TestBed.createComponent(ShoppingListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
}

const thenIShouldBeAbleToViewTheShoppingListComponent = then => {
    then(/I should be able to view the shopping list component/, () => {
        expect(component).toBeTruthy();
    });
}

const whenIAddTheFollowingItemToTheShoppingList = when => {
    when(/I add the following item to the shopping list/, (table: ShoppingListItem[]) => {
        const newItem = table[0];
        component.itemToAdd = newItem;
        component.addItem();
    });
}

const thenTheShoppingListShouldHaveTheFollowingItems = then => {
    then(/the shopping list should have the following items/, (table: ShoppingListItem[]) => {
        const expectedShoppingItems = table;
        expect(component.listOfTotalItems).toHaveLength(expectedShoppingItems.length);

        expectedShoppingItems.forEach(expectedItem => {
            expect(expectedShoppingItems.some(x =>
                x.item == expectedItem.item &&
                x.price == expectedItem.price)).toBe(true);
        });
    });
}

const givenTheCurrentTotalPriceIs = given => {
    given(/the current total price is '(.*)'/, (currentTotalPrice: string) => {
        component.totalPrice = parseFloat(currentTotalPrice);
    });
}

const thenTheTotalPriceOfTheShoppingListShouldBe = then => {
    then(/the total price of the shopping list should be '(.*)'/, (expectedTotalPrice: string) => {
        expect(component.totalPrice).toBe(parseFloat(expectedTotalPrice));
    });
}

defineFeature(feature, test => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ShoppingListComponent],
            schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    })

    test('Loading the shopping list component', ({ given, when, then }) => {
        whenIGoToTheShoppingListComponent(when);
        thenIShouldBeAbleToViewTheShoppingListComponent(then);
    });

    test('Adding a new item to the shopping list', ({ given, when, then }) => {
        whenIGoToTheShoppingListComponent(when);
        whenIAddTheFollowingItemToTheShoppingList(when);
        thenTheShoppingListShouldHaveTheFollowingItems(then);
    });

    test('Calculating the total price of the shopping list', ({ given, when, then }) => {
        whenIGoToTheShoppingListComponent(when);
        givenTheCurrentTotalPriceIs(given);
        whenIAddTheFollowingItemToTheShoppingList(when);
        thenTheTotalPriceOfTheShoppingListShouldBe(then);
    });
});