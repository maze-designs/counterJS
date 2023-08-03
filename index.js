const date = new Date()
const args = process.argv.slice(2)
const d = [date.getDate(), date.getMonth()+1, date.getFullYear()].join("-")
const t = Date.now()

const homePath = `${require("os").homedir()}/.config/counterjs/logs/${d}.count`
const tmpfsPath = `/dev/shm/${d}.count`

switch (args[0]) {
    case "get":
        require('child_process').exec(`wc -l ${tmpfsPath}`, (err, stdout, stderr) => {
            stdout? console.log(stdout.split(' ')[0]) : console.log(0)
            process.exit(0)
        }) 
        break

    case "add":
        require('child_process').exec(`echo ${t} >> ${homePath} && echo ${t} >> ${tmpfsPath}`)
        break

    case "start":
        require('child_process').exec(`cp ${homePath} ${tmpfsPath}`)
        break
    case "init":
        //TODO: create directories
        break

    default:
        console.log("Invalid command")
        break
}
