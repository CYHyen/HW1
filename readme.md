Question1 
===

* Hash function and Cryptographic hash function，所有的Cryptographic hash function皆是hash function，hash function基本特性是兩個不同的雜湊值不能夠是同個輸入值，數值經過hash function後可以自hash function的定義域轉變為值域，方便我們做應用。
* 而Cryptographic hash function除了有hash function本身的特性以外還具備著防範攻擊的功能，額外的特性有難以發生若碰撞與強碰撞，這邊的困難程度我們引用英文維基：「difficult" generally means "almost certainly beyond the reach of any adversary who must be prevented from breaking the system for as long as the security of the system is deemed important"」，即破解所需要的花費時間必須長於系統變得不重要的時間。
故Cryptographic hash function 有著hash function所沒有的安全性。
Hash function 例子： y=x+1 , x = R
Cryptographic hash function 例子：SHA-256