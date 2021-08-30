describe('Crawler-Urls', () => {
    it("crawls-urls", () => {
        // cy.fixture('topics.json').then((topics) => {
            let data = [];
            let topic = 'Code pénal'
            // topics.data.map((topic) => {
            for(let i = 3; i < 100; i++) {
                        cy.wait(2000)
                        
                        cy.visit(`https://www.legifrance.gouv.fr/search/juri?tab_selection=juri&searchField=ALL&query=${topic}&searchProximity=&searchType=ALL&isAdvancedResult=&isAdvancedResult=&dateDecision=&typePagination=DEFAULT&sortValue=DATE_DESC&pageSize=100&page=${i}&tab_selection=juri#juri`)
                            cy.get('.main-col article a').each(link => {
                                cy.log(Object.values(link)[0].getAttribute('id'));
                                console.log(Object.values(link)[0].getAttribute('id'));
                                data.push(Object.values(link)[0].getAttribute('id'))
                            })
                            .then(() => {
                              cy.writeFile(`./${topic}.txt`, data)
                            });
                }
            // })
        //   })    
    })
})