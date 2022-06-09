/**
  * WhatsApp  : wa.me/6288232991394
  * Instagram : https://instagram.com/rdtyaptralvrtha
  * YouTube   : https://youtube.com/channel/UCIDFLJlqldM5PVx_U_HbXWw
  * GitHub    : https://github.com/ThadzBotZ
  * Library   : @adiwajshing/baileys
  * Thanks To : 
  *  - Allah SWT
  *  - Thadz BotZ (Me)
  *  - Hardianto (Website APIKey's)
  *
  *
  * © 2022 Thadz BotZ. All Right Reserved
**/
  const fs = require('fs')
  let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

  const addInventoriDarah = (sender, darah) => {
        const obj = {id: sender, healt: darah}
         _darahOrg.push(obj)
        fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
   }
  const cekDuluJoinAdaApaKagaDiJson = (sender) => {
            let status = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  const addDarah = (sender, amount) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _darahOrg[position].healt += amount
                fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
            }
        }
   const kurangDarah = (sender, amount) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _darahOrg[position].healt -= amount
                fs.writeFileSync('./storage/user/darah.json', JSON.stringify(_darahOrg))
            }
        }
   const getDarah = (sender) => {
            let position = false
            Object.keys(_darahOrg).forEach((i) => {
                if (_darahOrg[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _darahOrg[position].healt
            }
        }     
        
   module.exports = { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }   