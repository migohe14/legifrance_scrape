
describe('Crawler', () => {
    it("crawls", () => {
        let data = [];

        for(let i = 42088505; i < 42088507 ; i++) { //43711506
            cy.wait(3123)

            let info;
            cy.visit(`https://www.legifrance.gouv.fr/juri/id/JURITEXT0000${i}`)

            cy.get('.main-title').then(function(title) {
                cy.log(title.text());
                info = title.text()
                 
                // cy.writeFile(`./law-title-cases/JURITEXT0000${i}.txt`, title.html());
           });

            cy.get('.content-page').children('div').eq(1).then(function(element) {
                cy.log(element.text());
                data.push({
                    title: info,
                    text: element.text()
                })
                cy.wait(2123)
                cy.writeFile(`./law-text-cases/JURITEXT0000${i}.json`, {data});
           });
        }
     
    })
})