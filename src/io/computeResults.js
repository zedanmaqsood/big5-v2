const getAns = (i, answers) => {
    const key = "question" + i;
    
    return answers[key];
}


const computeScore = (offset, pivot1, pivot2, answers) => {
	//pivot 1 gets added, and pivot 2 get subtracted
	//only used for ComputeResult();

		let total = offset;
		let i = pivot1;

		if(i===0){
			while(i<5){
				total += parseInt(getAns(i, answers)); 
				i += 10;
			}
		}
		while((i!==0) && (i/10 < 5)){
			total += parseInt(getAns(i, answers)); 
			i += 10;
		}
        
		i = pivot2;
		while((i!==0) && (i/10 < 5)){
			total -= parseInt(getAns(i, answers)); 
			i += 10;
		}
		return total;
	}	

    
export const computeResult = (answers) => {

    // var extro,agreeness,consci,neuro,openess,result;

    const extro = computeScore(20,0,5, answers);
    const agreeness = computeScore(20,6,1, answers);
    const consci = computeScore(20,2,7, answers);
    const neuro = computeScore(20,8,3, answers);
    const openess = computeScore(20,4,9, answers);

    const result = {
        'Extraversion': parseInt(extro/40*100),
        'Agreeableness': parseInt(agreeness/40*100),
        'Conscientiousness': parseInt(consci/40*100),
        'Neuroticism': parseInt(neuro/40*100),
        'Openness': parseInt(openess/40*100),
    };
    return result;
}