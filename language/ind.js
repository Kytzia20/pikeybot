const a = '```'

exports.wait = () => {
	return`*[❗] Espere :3*`
}

exports.succes = () => {
	return`*✅Sucesso✅*`
}

exports.lvlon = () => {
	return`*「 MODO 」 LEVELING ACTIVADO ✅*`
}

exports.lvloff = () => {
	return`*「 MODO 」 LEVELING DESACTIVADO ✅*`
}

exports.lvlnul = () => {
	return`*NO TIENES NIVEL ._.*`
}

exports.lvlnoon = () => {
	return`*nadie activo el leveling*`
}

exports.noregis = () => {
	return`*「❗REGISTRO❗」*\n\n*Hola ${pushname} senpai no estás en mi base de datos*\n\n*EXEMPLO:*\n\n*${prefix}rg nombre|edad* \n*exemplo ${prefix}rg keyla|15*`
}

exports.rediregis = () => {
	return`*「❗」 ya estás registrado :3*`
}

exports.stikga = () => {
	return`*「 ❌EROR❌ 」*\n\n*perdon ando un poco lag*`
}

exports.pttr = () => {
	return`*Use asi ${prefix}ppt pedra,tesoura,papel\n\nEXEMPLO : ${prefix}ppt pedra*`
}


exports.linkga = () => {
	return`*❌link o url invalida❌*`
}

exports.groupo = () => {
	return`*「❕SOLO EN GRUPOS❕」*`
}

exports.ownerb = () => {
	return`*「❕MM❕」*\n\nSOLO MI ONICHAN*`
}



exports.admin = () => {
	return`*Solo mis amigos akmins puede usarlo lo siento senpai*`
}

exports.badmin = () => {
	return`*No soy admin :( hazme admin senpai*`
}

exports.nsfwoff = () => {
	return`*Que intentas hacer pervertido el nsfw no está activado*`
}

exports.bug = () => {
	return`*「❕BUG❕」*\n\n*enviando bug al creador*`
}

exports.wrongf = () => {
	return`*Creo que deberías mirar el ejemplo y hacerlo de nuevo :)*`
}

exports.clears = () => {
	return`*「 CHAT LIMPIO✅」*`
}

exports.pc = () => {
	return`*「 REGISTRATE 」*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「❗REGISTRADO❗」*\n\n❕TUS DATOS❕ \n\n┏━⊱name\n┗⊱${namaUser}\n┏━⊱número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱edad\n┗⊱${umurUser}\n┏━⊱horario de registro\n┗⊱${time}\n\n┏━❉ *ID* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : *no spam* \n\n┏━⊱${prefix}menu\n┗⊱para a ver la lista de comandos`
}

exports.cmdnf = (prefix, command) => {
	return`Comando*${prefix}${command}* não registrado Digite *${prefix}menu* para ver a lista de comandos`
}

exports.owneresce = (pushname) => {
	return`*disculpe ${pushname} quien poronga sos?*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Disculpe ${pushname} no tienes nivel suficiente*\n\n*┏⊱su nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : PARA OBTENER NIVEL HABLE Y GANARA XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Disculpe ${pushname} no tienes nivel suficiente*\n\n*┏⊱su nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : PARA OBTENER NIVEL HABLE Y GANARA XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`**Disculpe ${pushname} no tienes nivel suficiente*\n\n*┏⊱su nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : PARA OBTENER NIVEL HABLE Y GANARA XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Disculpe ${pushname} no tienes nivel suficiente*\n\n*┏⊱su nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : PARA OBTENER NIVEL HABLE Y GANARA XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Disculpe ${pushname} no tienes nivel suficiente*\n\n*┏⊱su nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : PARA OBTENER NIVEL HABLE Y GANARA XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Disculpe ${pushname} no tienes nivel suficiente*\n\n*┏⊱su nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requerimento de nível : ${aha}*\n\n_NOTA : PARA OBTENER NIVEL HABLE Y GANARA XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client , process) => { 
	return `by keyla
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 🥳 LEVEL UP 🥳 」*
┏⊱ *Name* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Patente*: ${role}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Disculpe ${pushname} Tu limite a expirado para comprar limite obtenga xp*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 SU LIMITE 」*
*su limite restante : ${limitCounts}*`
}

exports.satukos = () => {
	return`*1 para activar, 0 para descativar*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 DINERO 」⊰━┓*\n┣⊱ *Name* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM 」*

*Número* : ${pnom}
*Expira en* : 30 DIAS\n*nesecitas premium senpai*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM 」*

*Número* : ${hnom}
*Expira en* : AHORA\n*:D*`
}

exports.premon = (pushname) => {
	return`DISCULPE ${pushname} NO ERES USUARIO PREMIUM`
}

