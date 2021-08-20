import languages from '../constants/languages/languages'

const getLanguageIconsFromStringArray = (array: String[]) => {
  let icons = []

  for (let l = 0; l < languages.length; l++) {
    for (let c = 0; c < array.length; c++) {
      if (array[c] === languages[l].name) icons.push(languages[l].emoji)
    }
  }

  return icons
}

export default getLanguageIconsFromStringArray