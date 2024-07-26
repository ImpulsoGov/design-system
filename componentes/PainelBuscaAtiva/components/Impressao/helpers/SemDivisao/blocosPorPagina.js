export const blocosPorPagina = (array, chunkSize)=> 
    array.reduce((result, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) result[chunkIndex] = []; // Start a new chunk
        result[chunkIndex].push(item);
        return result;
    }, []);
