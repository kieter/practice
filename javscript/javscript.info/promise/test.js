const promise = Promise.resolve();

promise
    .then(
        () => { throw new Error('error in f1'); },
        (error) => { console.log('rejected in then:', error); }
    )
    .catch(
        (error) => { console.log('rejected in catch:', error); }
    );