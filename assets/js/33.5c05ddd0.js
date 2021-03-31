(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{380:function(a,e,t){a.exports=t.p+"assets/img/deploytoazure.e0e5d477.png"},381:function(a,e,t){a.exports=t.p+"assets/img/enableBackup1.e2f34d50.png"},382:function(a,e,t){a.exports=t.p+"assets/img/enableBackupTriggerManually.d0290798.png"},383:function(a,e,t){a.exports=t.p+"assets/img/enableBackupFileRestore.9582c527.png"},775:function(a,e,t){"use strict";t.r(e);var r=t(45),s=Object(r.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"challenge-3-optional-vm-and-azure-backup-save-your-vm-state"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3-optional-vm-and-azure-backup-save-your-vm-state"}},[a._v("#")]),a._v(" Challenge 3 (optional): VM and Azure Backup - Save your VM state")]),a._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn-🎯"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn-🎯"}},[a._v("#")]),a._v(" Here is what you will learn 🎯")]),a._v(" "),r("ul",[r("li",[a._v("How to backup an Azure VM using the Azure backup service.")]),a._v(" "),r("li",[a._v("Create a backup vault")]),a._v(" "),r("li",[a._v("Recover a file")])]),a._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table Of Contents")]),a._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#starting-point"}},[a._v("Starting point")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#create-a-backup-vault"}},[a._v("Create a Backup Vault")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#trigger-a-manual-vm-backup"}},[a._v("Trigger a Manual VM Backup")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#do-a-vm-recovery-optional"}},[a._v("Do a VM Recovery (optional)")])]),a._v(" "),r("li",[r("a",{attrs:{href:"#do-a-file-recovery-optional"}},[a._v("Do a File Recovery (optional)")])])]),a._v(" "),r("h2",{attrs:{id:"starting-point"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-point"}},[a._v("#")]),a._v(" Starting point")]),a._v(" "),r("p",[a._v("In case you need a VM to backup - "),r("strong",[a._v("Click")]),a._v(" on the\n"),r("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-03%2Fchallengestart%2Fchallengestart.json"}},[r("img",{attrs:{src:t(380)}})]),a._v("\nbutton.")]),a._v(" "),r("h2",{attrs:{id:"create-a-backup-vault"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-backup-vault"}},[a._v("#")]),a._v(" Create a Backup Vault")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[Azure Portal] \n-> Resource Groups \n-> 'rg-contosomortgage-www' \n-> 'vmweb01'\n-> Operations -> Backup\n\n###\n\nRecovery Services vault \n-> 'Create new' \n-> 'vault...'\n\n###\n\nResource Group \n-> 'Create new' \n-> 'rg-contosomortgage-backups'\n\n###\n\nChoose backup policy \n-> '(new) DailyPolicy' \n-> Enable Backup\n")])])]),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),r("p",[a._v("📝 You might want to pack all of your VM backups "),r("strong",[a._v("in a separate Resource Group")]),a._v(" as backups of VMs might live longer than the actual VM.")]),a._v(" "),r("p",[r("img",{attrs:{src:t(381),alt:"EnableBackup"}})])]),a._v(" "),r("h2",{attrs:{id:"trigger-a-manual-vm-backup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger-a-manual-vm-backup"}},[a._v("#")]),a._v(" Trigger a Manual VM Backup")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Navigate to your VM in the Azure portal -> Operations -> Backup\n🔎 "),r("strong",[a._v("Observation")]),a._v(" The view has changed after creating the vault.")])]),a._v(" "),r("li",[r("p",[a._v("Trigger the backup manually")]),a._v(" "),r("p",[r("img",{attrs:{src:t(382),alt:"Trigger the backup manually"}})])]),a._v(" "),r("li",[r("p",[a._v("Press "),r("code",[a._v("View all jobs")]),a._v(" to get a status of the backup. It'll take some time for the backup to finish.")]),a._v(" "),r("blockquote",[r("p",[a._v("❔ "),r("strong",[a._v("Questions")]),a._v(":")]),a._v(" "),r("ul",[r("li",[a._v("How many copies of backup data does Azure do ('redundancy') by default?")]),a._v(" "),r("li",[a._v("Do offline VMs also get backup'ed?")]),a._v(" "),r("li",[a._v("What is 'Soft Delete'?")]),a._v(" "),r("li",[a._v("Which 'Azure' workloads can be backed up?")]),a._v(" "),r("li",[a._v("Does Azure Backup support 'on premise' backups?")])])]),a._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),r("p",[a._v("📝 Try to answer some questions through navigating to your backup vault properties")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[Azure Portal] \n-> Resource Groups \n-> 'rg-contosomortgage-backups' \n-> 'vault...' \n-> Properties\n")])])])])])]),a._v(" "),r("h2",{attrs:{id:"do-a-vm-recovery-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#do-a-vm-recovery-optional"}},[a._v("#")]),a._v(" Do a VM Recovery (optional)")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[Azure Portal]\n-> Virtual Machines \n-> vmadds01 \n-> Operations \n-> Backup \n-> Restore VM\n")])])]),r("blockquote",[r("p",[a._v("❔ "),r("strong",[a._v("Question")]),a._v(" What is needed for a VM recovery?")])]),a._v(" "),r("h2",{attrs:{id:"do-a-file-recovery-optional"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#do-a-file-recovery-optional"}},[a._v("#")]),a._v(" Do a File Recovery (optional)")]),a._v(" "),r("p",[a._v("File recovery enables you to recover individual files selected from a backup at a given point in time."),r("br"),a._v("\nThe backup is "),r("em",[a._v("mounted")]),a._v(" as drive to your local machine via the internet.")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("[Azure Portal] \n-> Virtual Machines \n-> vmadds01 \n-> Operations \n-> Backup \n-> File Recovery  \n")])])]),r("p",[r("img",{attrs:{src:t(383),alt:"File Restore"}})]),a._v(" "),r("p",[r("RouterLink",{attrs:{to:"/day1/challenge-02/"}},[a._v("◀ Previous challenge")]),a._v(" | "),r("RouterLink",{attrs:{to:"/day1/"}},[a._v("🔼 Day 1")]),a._v(" | "),r("RouterLink",{attrs:{to:"/day1/challenge-04/"}},[a._v("Next challenge ▶")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);