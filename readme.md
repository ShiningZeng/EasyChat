PK
    �OI�%�lB  B    项目启动.mdup "��\项目启动.md
## 项目启动

进入项目目录
安装依赖
> npm install

安装完后输入
>npm start

启动完毕后，打开localhost:3000即可使用

## 技术栈
- **gulp**驱动
- **node+express**搭建服务器
- **socket.io**即时通信
- **jade**模板渲染生成HTML
- **react+redux**前端架构
- **sass**预编译生成css

## UI
- 模仿微信界面设计
- 提供用户登录注册功能
- 公共聊天室进入离开提醒
- 支持私聊


##使用注意
- 因为我使用了session保存用户状态，所以如果要自己注册多个账号进行聊天测试的话，请打开多个浏览器进行测试。

##遇到的坑
- Babelify不能识别jsx语法，需要安装依赖**babel-preset-react**和**babel-preset-react**
- 在开发过程中，对js的一点小改动都要用**Browserify**重新打包，速度太慢，严重影响效率，于是使用watchify改善**Browserify**的后续打包处理。
- 前者的性能比后者的性能好几倍![Alt text](./1475135429183.png)
	browserify的options直接传入object对象![Alt text](./1475135401840.png)
	在控制台输出opts对象发现原来watchify会把数据缓存在这个opts对象中，借此加快速度，后者每次执行任务都会使用新的opts对象，原先缓存的数据都没了，这样等于没有使用whachify![Alt text](./1475134929980.png)



PK
     �OI��I�9  �9     1475135429183.png�PNG

   IHDR     �   ���n    IDATx�l��y�6�" c=Hla��%eA�TD[ȶb!�S8h�ʰ�mP{c��b y��Ȧ�6�^q$u�+�����A����&���'�-�2��6d-w�$���(�@=̏w�y�}�w��}�|�}��xf�������<3s��ޞ� �"@�  D�	noBT D�"@82<�#"@�  M#@�G�PSAD�"@� ��  D��� ãi�� "@�  D��D�"@�@����4�T D�"P��؉���W��1���O
]�\&-o��_ŋ?�c����#[���
^��W���tKLa.?����	��q�z�"Q�	/'����YJ@�  ApB���O'��ܛQVy���շ����]�\l��U������ՉEm�F����X�tYK~YK?��XG�>�M���YNn4��|HBD�"��\=ɧ�v��}<�ZI`�:������7w#7�՗q��:��8�I!���d���󓻐L��{C*D�^�4��r�5`��DD�"�,.�G/�;\-�f�4�*���A�e/!�����A9������|9�qd*�1�fԎ� D���&�2�"<7~zʡ|�qm'���Σ��{���i�1�7��������	|�ܔ՘�C:mFIJF�t1H�uM�G�q��>k���[qa��?+��֢������e�<!��+�����;~�e��o�?z�w*5���3ׄ��q_q�G&e1?�5�/U�������E�"���(J郶!]��!�xj 	d�����9 D��f����������\��3��;��A`񤌭�Dц2ڒ�P8�ܐa�<�h��2X0���#`�����?�����ُ���V, �FM�����=��C[qR��;�Y��$��s��{N��eO�cv�X}�l���|�+�s����0c�<��`ϏnY�����'ڰ� �����^��[B�����W��T\���5����_�k~Y���l�Gb q����b�r��3gPJ��hȺ;G���"@V9��0�� (C��?��C�0�}�1��aOr�1< L�XĢ�W�~l�F��C1;��İ�����D�\{i�"�t�q�0�0	��ȿ��簸�)�����t6W��x8~�3?���O܁��w��^-y�壼"���/�?��yQ��q;�w��O���3W����0:�mg�7��v-�Ru�(��L9�=} �$���>�GQ������"@���%�f��E��9�}�����'�����q9c>�!�4.�8��0�
ڑ��R# �bx�g?"7&mC<Z	桷Φ\���ܒ�*B�ea(����LT�Aܶ�cIs�ظ�g���N�'�c�:�yW^|TzV��党���P��ч��R�����Yt}�"@BE����
,u�׋��uc��"���X(�u�2n�kN����#��b������!���T�u?:��s|�k1:�)��4���ŏ���*�D���'�^��B�S���a� �c�4�-��U���D�"2�Zd`���B)-��:�{�@� R�zJT��V��q9��4����4���ٮ�Fn���$����v������Oo��'�����R'>n��`�7lP[�Ef�E����T��ĎP.��(`f�D{��ZYt�"@V��%��e�j�>�qN��-�Cܱ�i|��W<�t��i;U��z���DЮə)܎vb����n�KXd�&��U���BW�{(1�tV�k;��������IƘ�r>�<�b>؟�岮�lY��X���!O*B7֚}��'�U%q�4r�b�`u˃���ޡ��*P�6 D��T��z{N�t�;��[��f��L��h�a,��g�؃O�ƶ ص��l
�6E�Oo��Aa���-6��f�z˸̦򲼊S�p2����3[��>�b>�bTz*u��Vy.��x�-Sn޵c��������s6�<@�8�6[����/.b�m����ㅱr�G�,�X��2�u�n���ω�����"��{~�U��SoTL�������"1��c��E��:$D���!p��ޞ��k�5uU���V%��cC<�{�i�mdRe��2N������Arh�wLI�\I�"@���e��M�e�}����XN����b_2�R|��C.�)dR@:٘��*������@a? ��  �P�-[��Q�Q�˖R�zl��1ؼ�� 7u���9N�,n��*�  -@@-PW�" D�"��*�K�Y*��	���rU�ê2$@�  �$@�p�iE�  D`UP���ۇ���  D�"�t��Q.��_�B)g"@�  D�5	(Ã<����6�&���Gi
���  �P�y<��XN}Ø��є����e_�5:�T��:��ǯ�{,6ewK,�}�Ի_r$G� ���2<��Q�U%�V���m��CwKl�TsS������)�q��Uշ�2D����2<����i�F	�MEQJĄ�H6�}�9 �F'm�^T
 D��F���ǃ-����X۳L��O��Ͳ�a{̰�W-��v�6�E��2�QW�����) ����}��Wx
���{`ژ�O��/p�5Ȥ��3嘺JV�&X����al2�b�r(D��@%��QV�� w����NE�����<��d�����>��Z�ev�A�  ���Z@,�����L��{�.��X�������c͹����\k�"w���u��2��(m�5�t��{q�M#/k�gr��rɘ�qYF�@��O�K0?�[&��~ә�.K����،m��V�77l�/����y6�dr���דi<�I���i�F]�%��\�B��c�<��2���� 3U�e�ՙ�I�R8ս�9]!D���D ��KXDm�#�ߌ�����h��C���ms��at ��A e���Nft��Z�-�i�đ���R�����`eo�F%,vQ]��!�ܨ���I�u�H��ǐ-a�<]^��~t`F��{3�% >�<5~���wc��.�����e�e?Z�a�?������"@ ��0z<P,b@[�1�ҋ�m�ܻ�x؉��ggpS�`7N�rC�Ƥnt����з���;
�NK�V`���cH��He��>TSCFr���x����C$,?��S.V�6�H7��St�hy0��Gj����Ku�瘸�m|���m��rh,?�ahҁ�߬H�"@|P�Gc<�S�~h[���A��,�rFz7�'����C%�8�ZR�H{s��^_d*����\�W���=�l� iPa<8e����Pq�}-<u]�T����	"@��o������+e���,�4�p�X0�=�'C�m��/���s\-��Ǻ�"����.�X�g�C�2X��4@��>���l�4|'�w����|�<��R*��x��5>Ē��IuG�C-r�(ڣ�e]���D�"� ex���� ��(��'��y��Ј=�����*��흕�1�p�K��8�Xf���R��=�A`���r�w�d7�����0��ٌ�1}�KG��(���R�hC>2��3��a��i����tv��K�e��A���' D�4�@�g�pܸx
}���G�M)/�W����8�>��0�r��GC����[Xc��3Z��q����$�bE͏a.?&s(!�ܥr��<�tG�ya�$�G�[��)���u܆�U�d�/ك�^^/�D@iv�ʫ�X	���e;�|>e3d2y�� [��b�I\�|��
x�,f������t�"@V:��6���9 ���ᖕy��/=7�Qs��ʯ��� �?��ڱܦ"@� ��j!�# ��͊$0?s�H
��٬Ȋ��D��e&����x,3*�U�a�ќZ%�)�
[�' D@#��Z�ktH�  D��%!@�%�J�"@�  N��A1Nx� D�"$ex�-�#l�	��"D�"Ъ(ƣU[��M�  D`��c�E��#��+h���)����v^b���c��n�>�QՆ?7���ٿ��kO��5���>�7�MV����,�ъ�͒ۀ�+ ���"������F����fD�t���%ڕKCs����N+{��O*�J�3��$+�N�����/R�^��L\�ŀrl,�f�Ӽ��n/�`���O���m����S�]��i<��\��[~L�ġw��e;p�#��`Z�߆eS�
&+��2<¶ri��Y����܅-�K��2�Y���T�Nl�gx%^�j�\���w^�@��(�b��O7��gxe�0����q`ۗ���I�$��!��#��B��u�5/�"�/�A�ggM�*hj�%l����2="��^���6[s�wc������
�<�j.ߞ���4�,{=�<�o.��2:X���x2�:l�6`�Ԫּ��ϵ�J�D`�h�Gb
scq�s��#b/��Id����j���fѱ<�}�`n�VγH�7?�D˦k���*�\u�r��t]�����DN���ao�FI��a��/���:16�<�WD�f�����H�z �e�N�{�m���ayHw࢏}��ۆ��j:�� ǲ�:��N�Ɔ7X<?�]��W�t�C���o�����n���l?{��a�z���u���C;��ۙ�y�a���,'�����S	�?�L��.ex����>�������b��)X6=��2�0�$� dƇg���jX�O�G$�L^�޺%�-۾>+v�Ev?�u@n�������t�����ʻ6�܈�+�௥{^Հ��'#Bɰ�u��)p��wE �k#_��ư��x�%���ӈG�{R�������M�p7d:-� ~u�R����ß���{����{����F<�0Æ��:��9��4���o��0�*��H�I���i�cx�%;���+f>����o��Y/�?� fO��u�+r僻�ҩe$:��K�U���D��@@��m݌����ȳq��Ǥ���dq,]�H谘�c?���;9 �]�<
���7 C���¼�}꼡Q���#�N�7��J�=�0�৆A�i�]����5�C�8���g��;]/�7�zE����ʏ�+���eC����m�\����2u�8[�̥/pE/��_���ཱི��:�>��Q�<%n�܃lf����j����'����B�����o��{;O����Ə��i�T$��BMmQo!��'-��؀���s);�S�Tļ]����1���m@�%�ԧ��cH?�A*�G
�g��U�eH�����w���`�'�14�����6�Y���r�{�㇏o��gFD����%b�0���:|$��:�����D�a.��{1���cx֙-L�(���8�����H/�����ЗS9~���~�#"@�h����<[b�9��WS%��,��m�%�.G�2�#�=+M�N��ݍG���T�9����Ə�����S�����W�݈ڇC\V��5�vï΍���ރ�x��C�>�C�����X���uUzA���m� ���� ���hLE p���"�lT�2���K�E�:���+��.� ���9�V� �Z-��� �uZ~�%���1��b�.K	��U_��rM;-^�R+�\�R9������%J�-ec�Uڢ��)5 ��\L�C)u\
N�ffY<�YQ�P�YZC�^���ӂd�*����p��7r��2y�ُkp�߅�u��"O�p&����K�.Ւծ�����Y���qtޥVzuvq�+�,����ٌ��=ZbX�ذ�Q�X<�i*u��c���ӹ-���.������;X]c� KC�b< X����X���M;��j�8�}�Lg�0�7��j�i}dbLmU�#/3NÏ�� h�tY�x�Ն8d�S��(�iʤ�J�^j�/�̖�SHI3b&���)�~�O� �����l�d3z6r���^y��3���g�u�x�̘�G"��~ј�����7�
!=�_y�W�n׷���2�mZ���J8W�l�k��s���~��^�����"1�a��kI)�@uj�8�anx�z��$¦O5}[�>�J�g���g��z����59��,�t���=����C�z��mK���5C�:�^Lяk��\% ���j	�����M�U��+�
�V[Q?�܋��������l���g��園��j#��>7?�̽>���t���@3	�ǣ��WzY�.jԃ��|�.}���aS�����mEҥm�`Ĭ������7�P�)MGD��(ã��N5&D�"@�M@�7�$�*�M�`jE�"@� hm��h����"@� h*�x47F�  D��	�ǣ�۟jO�  D��Z���W��eiq���\Mi�ږT D���P�G����>�oI/� �K��B̓��{D�"@���2<�6�$l�,]P�D�"@Z��2<��a�>��%��D�"@����$�y���\�����V�9�)�2.��Y6g���)W1,Y7�c�$G�pͦ�ƾɛQ���Ms��{����ԣ�}��2NO�'�������k�\����1��l�"�\��Ub'�?��ӈ��p������y	O�z���Ѐ���}�"@�@P�G��������ɘ��LZ�s��XY~Yl�47���1d�i$cl�!��*Ze�l��1q$��h+������p���o�� ����ʐp�䮿��� 36� n�<���$��$�����za��1�E�o0�MX��tt�"@Z��j	[LEp��a��8J���l]C�4:�D��l�X�X<.2�hW�0�r�Ͳ�ǐ.��>MN�O�XC���{A_0=�g�O�:���﷔?n������`�~���E`� ��o6$G�  �����x�bG(������R��.[/����%��~���U�ʥ���R)f�d��؋T�y�2X����'>�"���W�?2��P�F��X�i��X�J����"@Z��2<��h��r�S�PG�|:�8��Y����l=��?ֽ&˯i@�  a#��Z������S(��$,�	<j	켈�2U����Ŧ�NY����}XoY?C�0C����D`�k.��G���t�>��/�M�>�_�c"@�  ��.��'���;9 �?(gk��P��1�����b{�c<E�uh���|��9�%R�����Q��yLW�T��r�_.�:1
�	����j�Y.�Ð�Z�̥�2 D� -�W�� `ކc=o#���e6�1u��1�)�N�+�H�e�i�1n-�>m�(P+˸d�Y�tZ#�)g��Um�i�l�,Vc���~�	|��c�+�)��8�R��� D��	(�c9b*���M/]k��7��L
H'�3U���h+oإ&$L�  -L@�S̰�P�\��4�Q��p�U�n"@� X���M�8�RB:��c���P��$D�",ex�-�F�  D��Jj�%�Y$���"@�  D�0��h��
j~"@�  D����A��ç�  D��ex�ǣ՚��K�  D����J��������Vm>G*�"@� �A`e�j��O#4��G�� D��0��� �=�t9���Wb�E�D�"@���P��x,[P�D�"@Z��2<B�QC3��k�( D�"P;ex�ǣvx��"@� ���
.e�0|{��3HMb��:�4 D�"+��1?�[ �lz��06� �A�  D��'p�!v�Gb*�#�4��y<�F�O"@�  +�G�  �IDAT��
�x�a}(�ΐѱ�:�K�  D@'���>��yD�*�S	�~tL�  D����2<�X�W�tN��@��b$C�  D�����=૛6 �H�  D��'��P{<{�� �b��fR��>����!D�"@��@�g�����O)��>'��oә� r�1g�eLE"@�  &���y���  D�"�4�Pˊ��X>�+ D�" ex�:�#�
SVD�"@���P�y<���d"@�  �B@��h�&�z"@� X>�� ���5ª*�g?�>���������@��$� �vcn�J�lY~�}>~_�|T_�����o�>�L�1�s�d�m��؆��<,�W=S�`�	$p��~��x4���4������'�f���?�ӢF�7�hC7����O��p��T���~�<x����˗��p�9���8��:8�>���%f����ϯm�!>�6F���rå,�wгMSȤ�tRp�`�p�)��4��h�=3F������s��%���7���A����ͨ�铈Gpyd+rC[�9��[���"@-FDq
����ZB�c�:�����������C���V����pr�p+o��D�isZK�Ѓ�Ŏ�:�|V駟6Mā��4��W)��V-��h��(ʩ�oO�R�`}9ɍ�G��� ��%��O������X0��)��m���������u4F�#X�2�u�m�$���A9���˪ha�b�H�p��-�]����(�bB�Y���g�ջ8?�r��ϡF�2<����o���`w�w���� ���2TP{\�}��:�+�|��"7=�M���.W[e�*>���sm֣ͽ�9���j�ǽ�~�a��?�F�,��2�����,\��=�mŌ5T���6\c�����+�a�*FD�����ĆWx9���kB�#J�(��S��w���L맽����|��n̆>�S�`��C���[���uv�����{f��ҩ���`e�<���d�izp�>��l��#��C�u��-�2�5>Jg^1�o�F��M�l��2�P���^qD�U���U'��sL�c���Y�����C?+�16�bǲ=�o}b q�p��˞FQto`x�ߕ>t�z��O�sI��r��ƬF��� @-�F�����5�v�h�e�J�n��<}k�Fn蔼+��]1����^F|w����!y�����g3�2^�����/�榀-��b4�A��F26�y�)2�L�w�N��"�z/�-����ñ|� �t7~j�U=OC+==<���B�췑{�c0����{����1if(<^�GC#�+"��=�4���o��֦�X~���6��[��ԩ����cṭX ���y�;����8bK�x��>=|����^~dX�w<��R6����#�^�����pY�����07�-1���y|x�ԙe&���6�rCq)�Í�y�2�uG�SP��|%���.�B�02� 
�w(>�L���;p�֦���*�a.?&NY�C��o��1>�5Q0�!�؛�C`5u�|\���Q�")d�b+
�'����Y���C�;g�*�%8쫶W���|O��_����4���gv`��2^O��l&�G��= e\2�\je`G�9��ϝ��3(�����`�=(����{�'���u���8tk���G/iE� ����y['3:������x3̍�{����e�Xp�ffK�
U�Ѝ(Jh,��n��څ_���ǒ+/F�ܠp��1F
.�~Jc���9ކ�xdr,��� ���?�2�`m��.�TA�=��i�0:.F�v�s��ų3��d�[������~�ˏ�������Q w��Q���~�xr��A�33b\�tD��ٙ*C ��G���Oϥ��OJf��7�f����Ɨ�O{�9��!(��WRLL�~a-�wg�*�Ӂ����tJ��bآʖ�Z�&�hȽ���T��Z|����C���:��0�>o����w{��W������l�(0{�B�Q��>U�yX�a��;��)�=RMn��b��O@a�x�X�"��.c6B/:�E�sg����C�n��?����q
����Gs�[����mS�PR./y�x��E�_X���@�2�}i��z'���9&n_s��w[e
�+}%d�߱�i����A��U�Ae0�NDwG�Χp�1d6}�sO��~ɧ�v�J��a�[�Xju��qD�]h�觽�Ș9�9�����l�.�?l�5�T�x8��h ��EkrpJP�5�=�t�>f0�`W��Vm/�r/�n๥���-����ci�")�5�2�ߤޱ�A~���ǖwaC�]2��g?����໽�e�ξ�֗K��e������I�f>w,/aU��0�x �p�/��Y w��q9#�ҵ�}}�D'���xp�^\B R���R�D�EcH ��x��dЦ�/K�Q(�܍v�!Uz���	�9�f����pL���X�~��І9ő��Z���^~d,�z��q��mԕ���f�{x�!�A;�@{8hy[w��7���}�@z4p�tG �G�_{US@xQ�I5��|��˃̀q���X0|���C�-��X���,����xp�o��N�]�������p{< ���0��rq�f,���4w��fVT�U����9y6�}���|��m�ԩ�#��%�q�P+A���N��RC�V�yG�47>І��"�{>~2�l�Іg2?��Gƭ��6��`�<4�փ��"�v+�+�4c�|ȣꐌ{�w�:�G�g0���쀘�k�9��^n%p���xι�\��L��f3 V�^�y�uP|j퇍�y?D�m//���x^Xj���x�u�.è�\��u�����2�<T�G8= 0e��	� �yݍo��S>��*�4�1~��0	��g�U
iG�]br}��ӡl�䏨����t=nm�e0C-"N�a�@\�'�?;�C�������ηХ����䍐�kk7f����q�*�YP�y��P�,%K��)Zq��ԙ�����+�+��]��^~dl��S���9��*�㛵�������<`mŎW�A�7� R�\���^U��|h�b��.��s	o��b^�1�=�����g�:������s}}��^��!���:��Eg��S��®��Gn����ޮ&=wĐ����Ѧ�~�Y-��q��w��P����8�>��0[?�>:��W����s�q���������<���t�"pq-*�Ǌ�Vz�i�ؗ��tF�5g*���EIǲ,Kt�B'�����nY�E���0�-��e�Q�n��{>S��駴D�Y����8t}��%����-?�Aa���%6��[ρ4vdX���c��!�0�L�Y����K&b��I6�.�zSc�uS�,*�T��yȂ�p$��I=p�3Q�7y�h<�h]剷�T0f�Q����W����������XQ�\3f�@�C- *ڽ�MkɍMa|q����jn������u��;�X�/���k~� ���ο˨�����~^T�����ͨ���,7=�W%o�s�0~�tW�HB�s8�K/]V�ݶ����m`�P��*�SiA��y ��f�k�M�5�&���rdo;bMm��+��N��$!�!z.��FL�t�K���ƸJ�MyT36�M:�A�_[�Ȩ��쇖��(�*i��#�J������U2_�Y���2:Z��._=���D,�(�|j�����ӈs��J��?�R|�u�Y�gT8�6�F�S����҇�^.j�B�$h��C�Mj� �1�a���`��E*¼\�P5�B� Z���"p��ÈO�"֡�ttO#����ݘ�`β��1���r��urQ���J�3�qj`1׵���/ߐ��4l4s�g]�����r1���vv+���?��o�J��El#�q��6��VH��P�2ׄ�'D�"@Z��j	묖h�" D���!���h�6��"@� X6�� �ǲ�L�  D�e(Ã<-��TQ"@�  �F@���l>��ʖ�ҵ�����9�s�+�Zy)9�/�Qs�X���36�"��<[��~�X�2�qŪ���(�%ikY�8ck������Ȅ�6�ex��#,M�Lz��OUd���s	x5W�ܜ�q���X��-o�'�U,���"���V	-!>�e|��Yŝ��F� ��x�A���M�o���j�������.F&L�h&�hnԺ�g�ٮ������$��{ʬ�~d�)��6ex�ǣ�;Bhk_*b�A�Ċ�9�P�>&�ڒ�h[�O��\�fq���#cMAgD�u	(�#����O">m�q�g?�>��N���:�G|��h�lY�/�L�?������,c�����3]�b|�?�1y����E_[\���<l𱼈�����oyj�A~_�1Q��ʓ�hzpg���R-��C��Cَ���:�l˵�μb<�Ǧ8KY�q���`gd�K���e���j:W�����4��b���{�EN�c꺟�l��g^i1�"��w�����qKK׉@kP�G=^[�����������a䆶��ø`��Eٚ��	`��|��c2�V�>>>��,+��F��������̪a1m�v=������v���8b�W���a�ٷ��:�N�����x���e�Y^�A[�����>S��~�K�yYi�D4�qQ*�#�.��o�؛B���e��� �(��x���m�ڙ�P:*�M��w��ˤ؆I�>�Lw�o�i/�#vn���_�ܳ,���Y[�b ��h��$�0�����ΪS|��񨭻k"�dty:&�J@a�x�\�""h������8����m�;ƚ�'��iOژ�q�c�P��u�-[����pd�9�����1rk~����\]���!�����[
f����6�@�{���ק���(Z�Ĥ�a���Ƨ���0�r�2��lY��A�۔������6���S�%�8��,����VߊZ<�"X�m*�Uɍ�Z�Fs@�����kC7�~&��\�:}y6n�tɽ��\�q兦�Eu�JAK{03��^J��*g[��Δ�H�fD�D�Gƞ�Ή@P�G=(����W6M/:�E�s����k����xv��(7DnL��tL�.mŇoJ�DK�yhx��|��� ϔ��瘸�m|���m~� x��n�@�Y�0r���Mw�}r/J�4lfFeb�J�`�d��Q�wK垍�qR���O�����ܦ���&Y�]b�$�U�0..��(��绽�ǐ.G��0/�aL��o@wD��C>�3�be�?�����>*}���v>���9��ݏ�s�t��ex���S�~h['��{��S�J�{2ʸ�n<H��jI#�]����ߴUި�/�5a����G� � �S�(^��q$�ӆ �'�&����$K-,�.����f�ط^V*HM��:�M}�P��faCQ��u(���=.�*�В�E0jZs��ٚP�D��܏�&N�D��(�#� 7������H>��!����'Co���_F��Z4�u@3Dt�F��+�����`�ZP(B�H$�h�f�38��`�U/���Sa��~R�% ���=��0�:�`:�z���d�x����[���T�lXr��|�u��^zjۃq�A�"ʬ�ƹ�f��h?]��k8�%m���8��bG0z�]q�G�1!]$�E@��x <��3���	�u���>4b������ūz`i/�;+�ci�a���Ƚ>YÔ�`�Z � �b�+� 2;�y��n ��UL�xHAj��������+��adx���b�c~q7�˸CU���M��6И>(������W�6 ��|�6bƪ����^k�-|1t�_�W���J�����*!�3mCWV9��-cKB�D�%	(�#�`�0�/�禔��Vq
�'�X3,��2���-�5���h�n�z`�૱�L
���^M�V,���@�����(��S�����_�xv!�D�d�O���f��H��<�a9��q`�)��2w㊚�� �F�T~N�F*�OT�Җ�,��DM�u��צ��l+�#��\~�tR���^�N�y�����iɶ�:��p�P�����3y����P��˻?�u7Vr6��a�?
oϡ3G:"�Lඍ�=|�x���h���{�S0��f5��I�Mf^�Ql�EĜ rm�ۂ��A���v���S��ch���2!��@�=� 2Ua�{��6�e���ŧ�o	�ֶ0�t7:غ*����Y�%X������
��^:jz�X餜�Z�86T4�C�qȥZb��F`u����ɍz�1?2n��:hMj��5�O�&D�"@�I�<ͤMe"@� hq��C�r|�I�    IEND�B`�PK
     �OI�|�f!  !     1475135401840.png�PNG

   IHDR  �   l   S�t�    IDATx�]l\Օ���
9$lWIZ%�g�%v��]JB���1�H��4�iU����H%�j�JH�)u����h:���Ŏ���	E;F�Mb��$j��XU��չ����潙wg��ϓ3�5��{��~���9��{�u�V���aF�`ʄ��2�e�� #�0��@�?� #�0eE�MY�e� #�0�h�`F�(+�h�
/3gF��A�l����1���8���{�&��-3$�4=wb��|�	[�w^��_�!��l-=N���2���R�޴P(_�~R���� ܀`�(�mW��t���������g~��'��<�25yvexW��O�N2���w���}��Q�[���P|;)���X+-��.�~�����S�L�0��d�,�ޏ��/`�Ë]U0u���Z
LM�WxW�ߊd�͞����BC��������=��H�݈�ӈtح�҂7�7!���P�
�`OL�0�"P��Y�yK�Õb{��]�f,DS?�2�b�oێ�ؿ���?�����`��kh�H�mF����t�Y_>� #�m��uk���Q�H>y�n\lߊ+��Q�Ngs������җ誌�Lm�������z5ƅI�ɳP���f�2���\~Z�e�.���
;��u��_qx�_�՗�>��x�K�5�V��F�����z>zS����6��l��|�1d�Y�`g,�t|�m�L������5��h�m��`f��O!�s_�h{�6��[mm�g�� �`]�ڂE뀩��o$F2���b8�d��|�G���T�����������8=�!��� �[ꠤD�f\h���˿q0dW��2:u ɇ�:�w[��3�G�4�~o�;����K�e.�{�z�x�E��m�W.��
;��]RH��?����F!�����/0��vKSX^�K4��_����Z_�?aS6-M� ��@�MG�#�������7�kF��e(*��]S M��-^�o!c(��)�y5!zsc�a����d^��P�+�2Ԏ�2�e���VKH����v������, ���ϕ����z?5��d6��X0_��KW��޹�&��_����Ǵz���;�����D�f��sq�)S�x�j#��єU;�\_K����z��L�j� xi`uhn#=4�{_3�@`PT4Y��U���I��⍷�_��9)d0�Ⱦء�Y&t?�l +��R�[  ��W��u��nے��C��_�,]���W�e2��ӌ��@�<
pЪm|,mn��U���oK���,��zz�^{S�r�ogƕ�^�RQ�ԡ�/�X(�x����(Y^.3�@Y(R��p�[�����g5��`|,;>�b������'Kk)���N�p�ӗ�.�	,���,wVL�*.�(�b�(�͙�/�0�LB�A�ҫ��W5EWk�@
'���cX�'𠀴\�0eF�Ȩ3�28!Y#���u!�Si��7#�h hVR�j	�|�VU:��AW��~�+Ce�K���`���W��9X�̱���GW�' O���\�o0/<���$��;������a����5cSȌk��b`(�kQ_�/�g�C@~yB%���K\<%���k����C\9`ݏ��6�v��ܓ�����It�n�-X��.̣�LS�/�m�I�x��P��-�>O2���
7}[3	#��*N��
l �}�(�j5��G!�͢�s�u�Ts�ReC��qߝ�"�065�4b�x�
��Ռ��F��OT��� �!}�G����!��S$�a�{�vL��#����Xh�p�ٓ7-�,�pc�LC���@g�����>
��`�B���X��#�f�L��^�Z%�����6Wf�h���K�;�ұ/�Z��ԧ��~��
�{�B�!��)�YѪ���),z�
;^����9���YU�!�U��a-����L�0����7��g�FN�s?�Hv�`l'Z�w�	[��H>��Fꇋ� #0k�����B�g-,���yf�$�}'�m�"�`C>eTX$���8��ݞ}B��2#�������5��ʋ/K�����yU �x$G:ҁ�6�%��$b@<Z��!��^�P;���
xnx����EC'4�	Zr���*W�Щ��Y-��?��D��|�f�s���2 ��h��?�dF��p���*#�0������Pf�0� #`E@IфBt�F�`�()�L�~F�����`F��D@IѰES�!����d^.@��C{d�S)�Ӥ#�T
���:S[*O�OQ�C?.�mF�P:�-�J|�T׆�D?C�=t���MsON��=2͐���A:u>�@��j0�f�!��hȢae�X�*���;?������C����Ђ�Da:͠�Yc���2q���
`�Ռ���3V2V��* ��J>~��m;"Hb?�Ȥ������	����ĉ��Nt�݅[���-dOc�I�3��t���-�|R�g��8m��x{�}�ߠ�mF��o�q�o�$�,���"f����|���������ԫhw8���It�^���G�4%��i�+Ǐӂ��0��C�KfN�=F������	�E�/E��ć:[�F��| �֛���`�̛�����DZ�QAG4�#dSXэt A=64`m�cH�bHph�Y,�K������h�A'�`��W�Y:�L,aQ�_�|YZ��2:^&���>v��4ۼ��t�g�����Gw
t��A:y&ҡHJk��9�t-;cg�8$/�4!�4����V�,q;F��PR4A�h�\2U��y�EP��pAO�x�,�c���24���2�u��F[��$ ��<d��i��8O�&�^�y݈��w���޿�i*U}4NjA��_��/�:� =cd��߅V�_�����������$�Qtu�ou:.ϊ�r_�"j����|Y�g�����Y�&[pGH>k=鹾���9�f ��Fzh��e��H2#PY(Ѣ��� T��2Y0F�����b���X2w�(c��f��ݲ�9�ӭNYD<����Y�N�}�|?GלW�e\�-��ii�Ѽ	a=!�St-w	�@�^�
a%y�/c�G�%��Cq<�������:a�$�ߦ���8��hSHv�P�hZ=͟��L�T<�ߢ�1\8TU��&K$#�`"�+a�dp�mc��tet>�6ZK斵����B����gǑ��*ߴ�?�/��X.�P֔L�ͥ3�RPI������xt �3dLj�$E���aB�BΑi]�����>��f|�`L�M - W&3��Z��yq�~���4��b����B�Rʢ9fZ9�C��xd�R�bi���w��0:��т;��1�?���-�r�ʙ����`���Q���:�%B���yo]�&u�h�I<kY"���X��ݏb`(���\�q#�@I��GC�f�M��P���</Y/�4����i�·�S��@�՘Gi�OZ��|y>�������֖ξ9�U8�=r]���ڳτ����	��,�]�>	���긌FLu�eX�~�-U��AK�C�ۼ{��<K��D�d?]���	c���K�0��%ET�F�u���m�?�z0r4��mzX3Ѵ>*"�L(�r��R3k��^9
jv�g�֬�pfD���2��ia��kwi���C��"J9�l�L-����ZF��JQv��S����S$��y#�L�9��f0I=�`�����M����N���=�F J���d�|Pr]P �%��͈4'I�̟:�eӦ7>N��#pm#P͵=�<�|g����4�6�Zk}��P�)�M��EF�(� [4!b�و@��Da�w{?p�6�v �䍨��v�jWEشT�EF��E@I��6�;� #�0�@~�~m��9R���˹�>�H�F�#���SG���G�0#0�̟._�bFĸ������@'E3#r�� #�0%#0��F) h�h�&O�O3`F�PR4A�G4y*���!1� #P2J�&hD��)y6����iٵ_�Ke��17��s��7ߊ�c[1�o�q��;1��5�O�+�_��ʳb����$o޾J �����A,X�1y�g:�U��B�,	��է7W�EC/[�O0S��Uf.�C�'&/�$�2Ķ�ǉ��8����L�<��W��E/��%��N��C?��)�#��t�����Y��;�u{�4kg����v��8�]7̘��+)� ��r�<��O+�H^�=�]NOg�˘��K���� �lİ
�s�4�r�
��C/g㯣1^*�O���w1�¦y�V�^/���s)�'7�nQ"�:��˥��~̅�ϳ���~Wi�,HJ��
�<�>{ܡ���ïU��k�F�g	&^����[W��g:�r��p�z`�S��!���,���[�{}~��0E���y.�{��E�;��`�v�k��{��YZ"�MCQ�A'��&��uR��eܧ��;Rb��FHyc�]��σ㈶�a'�N���R-�;��ʢ7�//tvH�H����-s�D�Wя_��,+����2N��AiٖX@V�����﹌�~z	�c�`���i)F�%mtJ��_�����c_���#q���fG�c_Ƙ^��#�\E}�
�׽
5����t�=4���lvY���;~݄�'���.{9�+�յTS� ��<�-�7����P䌛�;�l�?s ~>�&ә/()��YA�GL�x�&z~����Xk�H�j�ћ�@gۀx1��\^|4��e�8����x�w���_WF��X��g�tz��L�tD`QbN�f���*�L��/��s(��m_'�a�P�z���k|Ss|i��o�<��$)!zm1�	7bGlpNz)�L��/?	�E���W��6n}�1�s�����%��ϗ�mg���U�}30@K��o�>�B��Ů���إ�_��wA�@W(�ɲJ�mM8BJh������h��#��jl�v���vQ��3yb�<�d�(pTΝ�w�1&�
*(-�-�+h� uhО�Q?�ޞ�,�`������9�/q�U��s�Q����,-?g�(�o��C�V{��x�P R��|��2(�Q����ξ�	&0�Z���՚�GrZӯ���\%C/YZr���T� s���2�N�b��%L�2���M|��N�U!z(�6-!7>K��"��?)�P��������螏ݘ�����xk�Q4��A��U8"��iP���(��`�c�����R$��2�3����c��u��r��F���Q��C�?�@,�B�r��TYԸ������ �ŋ�4�^Z�!�R>�[r{�2Hm5��?��\�W/�x��,/]ʲ�}X��;�e)�Ǻ�ם��x�:�C��m�҉����$w߶&<k�ى.��$���˟���ر�c�L�~��S�/�f#[4e�5�0�6��\N.C�Ű,,�Z��!�x&,�p��Dd�HW�67b���y� >���/�A�89_(��cwb�n�x��F���[����P��*s�}��[�upO�d$��+j8�<5���,1��ɵr�j�^���.�JI��'4y --�[��ͽ.���6�S	�Y��ۆ��m�l/���&�ϑ>`�R��α'��8���, s�}iK|8yޓ�fn�.�&/K}]��d�����wsi��NjYZ��\��<Э�M�|"A�Ȧr�e���h�����X��%7���)n	Ħ�?�~q�;=@8�O~��\� 5Հ�:��$�o��-~ =@j�.��ص�,s�}i/m,]`��ฌ�*��a��"��`�6�bՖɰ��Ɍ��ͪN�텞���o��޾0%�c�S5��?�>��s�DA��(^E��,�dY�μ1�����Kt`8ա7q)v�g���!�W���E�> �%|���B�%+�������t
au�i�OL�7�$"φ�ݢSj>�l���di�K�d����q�Wg���"�V	���&��HuV�y�)*�0���ʶ���`���M#��0>A��jDr�����x��N~7��yN=?��圱���X�E�-����x����DK��/�+�	 "H�UA���ǂ[�  B�7�x�����e래a��F1��}+D.�/l�i�b�B��[�miެI$%C4y�n0����w ^�Y�'奡k�}
�>�n�9��/�|�@���0���]߶]l�N>��Stki��ES~ܺ\���s �Y���5|m��s��f�@*@�i�}�u(����N�5�o�K��LZ4J����F�`f3�h檤l�O$h�̮ǎ�e�k	�˗����^�ju��f�w�`F���}4?�<@F�`f�hf�`��G�-�i�b�K�G%���\��4��`F��M���M�"�&_ݍ���͸��"��`�PR4��O��	6,#�0AA@I�͂�<A�T��`� !�t�f���MsbEj�y)
I�%�4���̸���fi���N[ۑ?� ��ġ�b}��g�q/-Y�:~V_k,�p���A��x�C��#�\3���h���:��;+�i�����>D.������ ߺ����ൡɤ���>[�%F��A�M�,���#�Q(���t�j3����Y4���h�1���{`U6�$�qD�"�&�3f���:Iy�H'>�
.��
��
�>�{���殟���8�,�	~H��IBIm8�o�ue��$�)��K���6�0�Kt����i�7F`�PZ:�O$h� uh0�t|��drgԠ9�+��ǡ8��Kl�łq���@�S���0���E)�3@��N�ӊ�.�2��v�2�¿Y�db�_��W���]k�pa�WW2��������W6L�0ӂ [4~�\׌M! 3��E�%���;�4g�'=f9yud��CXA:"_&-�Y,F
�_S6-;ɼ2��T��2����O��O+��
� ����i������F ()���D�&�ʔ�t��9OJF�&��)��h����y�|Y��f^��`�PZ:�O$h�@O�l]�j�G�Y�g�K�\_K��8>r�M�a�e���tF���Č�G4ǐ+��U|_[ Ku.�˶�7��0E@I��'4y���F76��Tz�;��k�Y�t��␱�^Ե�3F6��������0�D��uD�%���Y\@)J���`R���QhEc���7���ߌ@���|�����C��"��9K��Jl�^
qv��]��Ea�{�i��Fmt(�e�2�,&���!��ȳE�M[x���afU.FZ�"���,e��j��8��s�
J�&h>����I5�г�!�F��7nr�#�0%#��t4�H��)y6��A}�&�����iꐻa�k�h*}���r�W:<>F��9��̉�=3� #��V��΂�5[ag�F��vPR4��v)#�0~!��hآ�v��0�������a���y0x�� #������	�ECQU���s�iO;�Sj;��B��0� #p�#P9Qg"������xD���=ww�5���F�(3�ߢ1 yV��Ԝ�g�H(�J4�F��ǚ��h�ߌ #�0eA@I��v�H�sH"��=��,�̔`�k%EH�҄��R�&fF��!��hf�ECc8�4"���ۣ��� #��%El�F�ϒ���� �g kr2Z��0� #P2J�&�9���:)ܹ�MO>�Qx�J�
��0� #�+sU��Ede�ғ��pц�X���/�W3� #�d��aEH�W2u��2c�� �\F�`�"��h����;N�RK�����-.0� #��%E�e3oա�1$�z�bL�0�@�()��n�Էu"Jb�.V3�>8ܞ`�()�@[4-;��{i�A"ģ�ؚ��t0#�0> 0����a�E:�#��Jz;"�5�8��ǆY0� #���9������`F`��M�SO�jϣ��aF�`��!�M��eΌ #�0 ��f{��8v��   �IDAT#�0���#��hu6��q�� #�0PR4l�x@�$��z�
��z��•�Rr��:���0\rR9�� 2fq�'��q�M�����1exN�%#���R0���h��З�!�X�K�D3|�����l²#
'w�&�a����wa���W1�½���Ւ��mG�#�^̲��2�a
"��=4�ްC�    IEND�B`�PK
     �OIo��NY  Y     1475134929980.png�PNG

   IHDR  /   P   H��x   IDATx�\K��6��r�,��|� �,�{'�Y�͜��~i��O$EJ꩚"4>lIx�d���?~���˗���������!��巷��0^���7}���9Lɖ�#���y����c�Sұ��<��#��١��k����s/�k��y�Q������206�>%�v�#x����z�����{5~���>< ��@,8U�ُ���� �����X�����\>}����&���^o����#_N�x��(l���0r�H��f�οo�ќu�1�d�(��12:��a4=l��Fog��,���믿�y}���h'�g��d�?�Q��t�([�)m\�SJ��S�u�g��wH,��P+h�m��+�C��.]k�3���*RAb@��
Լ*HD���(�6��mo:�	�A�&4���d�׭�M�1�'�MH��b������d�2��v4��G�1`\�y�Y�NX1 ���4/.�W�.��A����d�-�o���)gC�&gg�����C�g �U	�_��?ԏ�or��s�S9r���f�����\ܜ�h>����'�B\|;R�ˌ�aް���$��c����1��z��_�΁�ρ)����(n��vr�j����ŀ��������gP���?$� �@C�6F���N(ҷ��,�0Q�E�ژGq���W~b`g��|�� ���q���0���	�?�V�Q}�jQ^1pu�?F��S؉t���J<q�F1 �(�Jc{�{y���u�c�լe`�3��K�?{K��5�P�e@�k-��.��AԼ'71 �2P|浶<e_�@����*�sP�zαn^i�!�5�����W#�~'b�z�H��b` �i^h+E��@]��qV��w�g2p��w��ﾾ3Oj�z�i^�G�벚vl:V+vr�yS~10��a���X�bf���S~���v��ux;ۀύ��-arv��8��(���#l�4�!>�1>�-Vi^°?˨��z�\����<z��s<�1�d�{��y;b��\�������'c9~�Ȼ�y��6�㯀�cz?7]���(>����(T7��5̪�&��U���x���m�-D��(Ł
{��l�?����9�}�Z��K8����8�yم5���Ŋt�d7,���?�X�����F�W1p��6��O�bf�vaz��簰��!���e�H�� g�T3����6F8�����t���׾*oo��&�#lY���|�F6.�ˍ^���(����?�l3۽��f��7<lGt�o2>���з��ǈt�dg�d1���跍;�Q�ޒE���pvm�K����7j%��l���w��k�ԉ��w�k��@?;{��10�y���+i�J�+9:�[�eN~G���H�b@�2���ʘ�b@l�����-Vs�"�>w��n�.r�oVf����}�|���7-k�y#���8:^�#���v����h��8��y��wwu�y��h\��)��q��?zX��?����R���ss�鉑���v���V���'�*�v�k�-:~�c5��?�a�1���ֱe��!������O�]�:�.��-���Z|����1�m�V�$��?�B8{-��ώ_�5���]�g���_� z�C�a7���a�>~���gz����=��#ǻ��Z?�3?gr6ƥ�?���!�<F~��?�Xo�[7ȏ�>/�su �s�lC�R=��>�|��A`��<��1~���͍���_쨡w����l�O��^gsֱl5��&U��X��Yɬ���q��x����p���#������G�R������6������v�5����u,�_m�[~>�����hRS;Ǩ�G�aߨ��)���RuD�鷍Qҕ��@=�	���Cݣ���F}8?�\�x�85�j�����8�Y�9g�<�y��X#�T�����u���+�ǯ��o]co�R}=�{|[y �s���c�߳���~�h����_���Y�����3��[W����1��g�#c��83W��#~a��jǗ�8*��?t���Nbl��l��cq��c��#���C|�9���+��}����Y9��s̘�����Gn�k�Ïk`��q�������Gx��/��Ǝ�R���V��������V�����-�0�����|��d���ZK����K�[�xw�{~�|�z-�|-5��b�@dX�W?S�mL��k�����6��(k!Kh9q�x���Z���?�*_��MP�����,1 ��y����՞�g�)^����y mG{^`_5���j�����VS���Lm^-�2-��(��30�y���l��fU�f�����kj�ڕ`��v=2�K�30���v%����a[��)�8�o�Q��AFl��f���(�L���Sib������:����Xg��g#۠g�)<�zF��c���)>-v��F�Y����*���v�����;�����k8�n��q�3s+�8��᷍���v��m��fwŋx&?�|
/vf���5���a�1���OD�&Z�z�X������cm��y�߈��-��t����j|k0>��b�	�=/���L�H�(��z�����`����#7����׌>���g���|�n�(���������K00�m��6�[�H����m�OY���zoO�5���Ny��y�:q\5��[5/;���uR��g00���3(�*ŀX����
֕S��n����7^�Um@��=0�����O_���/��măK    IEND�B`�PK 
    �OI�%�lB  B                  项目启动.mdup "��\项目启动.mdPK 
     �OI��I�9  �9               �  1475135429183.pngPK 
     �OI�|�f!  !               �?  1475135401840.pngPK 
     �OIo��NY  Y               �`  1475134929980.pngPK        Sl    