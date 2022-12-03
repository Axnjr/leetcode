class LeetCode{
    StringCompare(str1,str2){
        let prefix = "";
        if(str1[0] != str2[0]){ return "nothing common" }
        for(let i in str1){
            if(str1[i]===str2[i]){
                prefix += str1[i]
            }
            else if(str1[i] != str2[i]){ break; }
        }
        return prefix
    }
    LongestCommonPrefix(strs){
        if(strs.length<1){ return "" }
        else if(strs.length===1){ return strs[0] }
        else{
            if(strs[0][0] != strs[1][0]){ return "" }
            let prefix = strs[0]
            for(let i in strs){
                let k = Number(i)+1
                if(k >= strs.length){ break }
                prefix = this.StringCompare(prefix,strs[k])
            }
            return prefix
        }
        
    }
}
