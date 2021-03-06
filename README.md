

![](https://arkhamcards.jlpayne.com/img/icon.png)

# Arkham Cards

Create and edit decks for all of your investigators -- it will even check the deck-building rules to keep you honest. You can also group together decks into campaigns to track your progress combatting evils. The app can be used with local decks, or you can link your ArkhamDB account to sync changes on the go.

* Edit and upgrade your investigator's decks, either offline or by linking your ArkhamDB account.
* Track scenario results and keep the campaign log up to date.
* Keep track of investigator trauma and assign new random basic weaknesses as you take on new madness.
* Log the chaos bag as it changes, letting you have multiple campaigns going at once as you wait for the next month's mythos pack.
* Use the advanced card search to search by trait, health, shroud, etc. A great tool if you ever need to evaluate how many 'non-elite' enemies can be targeted by a card or know which locations a Flashlight wielding Zoey can actually stand a chance at investigating.

## Getting Started

Follow the steps on [React Native](https://facebook.github.io/react-native/docs/getting-started) to install React Native dependencies for your environment. Once you have those you can clone the repo and get started.

Install NPM dependencies

`npm install` or `yarn install`

For iOS Install CocoaPods

```
cd ios
pod install
```

Build App

`npm run ios` or `npm run andriod`

## Translations
The app is currently translated into English, Spanish, German, Italian, and French. Translation data for all of the cards comes from ArkhamDB.com, and is community managed. You can submit edits for cards in the [arkhamdb-json-data](https://github.com/kamalisk/arkhamdb-json-data/) project with a pull request.

For all the text of the app itself, the translation files are extracted using the unix program `gettext`, an i18n standard. There are many programs that are capable of editing them, but I've found that a program called [PoEdit](https://poedit.net/), which has a free version that is totally serviceable. Using this program, you can edit the .po files in the [assets/i18n](https://github.com/zzorba/ArkhamCards/tree/master/assets/i18n) folder and submit the changes via Pull Request (or by opening an issue and I will provide contact information on how to submit changes). 

## Authors

* **Daniel Salinas** - _Initial Work_ - [@zzorba](https://github.com/zzorba)
* **Joshua Payne** - [@suxur](https://github.com/suxur)

## Acknowledgments

Arkham Cards is not affliated or endorsed by Arkham Horror: The Card Game, (c) 2016 Fantasy Flight Games. 
